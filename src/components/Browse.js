import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const Browse = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch("https://api.tvmaze.com/shows?page=1");
    const jsonData = await data.json();
    console.log(jsonData);
    dispatch(addNowPlayingMovies(jsonData));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
