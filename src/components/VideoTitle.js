const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-6 md:px-12 absolute bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-2xl md:text-4xl font-bold text-white">{title}</h1>
      <p className="hidden md:inline-block py-6 w-1/4 text-white">
        {overview.replace(/(<([^>]+)>)/gi, "")}
      </p>
      <div className="mt-2 md:mt-0">
        <button className="bg-white text-black px-2 md:px-4 py-1 md:py-2 w-24 md:w-32 rounded-sm hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white bg-opacity-50 px-4 py-2 w-32 rounded-sm">
          🛈 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
