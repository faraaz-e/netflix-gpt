import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black pl-4">
        <div className="-mt-40 relative z-10">
          <MovieList
            title={"Now Playing"}
            movies={movies?.nowPlayingMovies.slice(0, 20)}
          />
        </div>
        <MovieList
          title={"Trending"}
          movies={movies?.nowPlayingMovies.slice(20, 40)}
        />
        <MovieList
          title={"Popular"}
          movies={movies?.nowPlayingMovies.slice(40, 60)}
        />
        <MovieList
          title={"Upcoming Movies"}
          movies={movies?.nowPlayingMovies.slice(60, 80)}
        />
      </div>
    )
  );
};

export default SecondaryContainer;
