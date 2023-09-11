import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;
  const mainMovie = movies[78];
  console.log(mainMovie);
  const { name, summary } = mainMovie;

  return (
    <>
      <div>
        <VideoTitle title={name} overview={summary} />
        <VideoBackground />
      </div>
    </>
  );
};

export default MainContainer;
