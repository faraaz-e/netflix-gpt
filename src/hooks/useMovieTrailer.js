import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect, useState } from "react";

const useMovieTrailer = () => {
  const dispatch = useDispatch();
  // const [trailerKey, setTrailerKey] = useState(null);

  // Fetch video trailer link, if it is present in API
  const getMovieVideos = async () => {
    //   const data = await fetch("API_URL");
    //   const jsonData = await data.json();
    const trailer = "3dm-AFKUmFw";
    // setTrailerKey(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
