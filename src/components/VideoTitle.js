const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-12 absolute bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="py-6 w-1/4 text-white">{overview.replace(/(<([^>]+)>)/gi, "")}</p>
      <div>
        <button className="bg-white text-black px-4 py-2 w-32 rounded-sm hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white bg-opacity-50 px-4 py-2 w-32 rounded-sm">
          🛈 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
