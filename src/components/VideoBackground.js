import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = () => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer();

  return (
      <div>
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo +
            "?&autoplay=1&mute=1&controls=0"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
  );
};

export default VideoBackground;
