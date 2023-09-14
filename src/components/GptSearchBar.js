import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieInAPI = async (movieName) => {
    const data = await fetch(
      "https://api.tvmaze.com/search/shows?q=" + movieName
    );
    const jsonData = await data.json();
    return jsonData;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Movie1, Movie2, Movie3";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(","); // Results: [Movie1, Movie2, ..., Movie5]

    const promiseArray = gptMovies.map((movie) => searchMovieInAPI(movie));

    const movieResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ moviesNames: gptMovies, movieResults: movieResults })
    );
  };

  return (
    <div className="pt-[30%] md:p-[5%] flex justify-center">
      <form
        className="flex justify-center pt-28 w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 mx-3 w-96 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 bg-red-600 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
