import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;
  const mainMovie = movies[234];
  const { name, summary } = mainMovie;

  return (
    <div className="pt-[35%] md:pt-0 bg-black">
      <VideoTitle title={name} overview={summary} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
