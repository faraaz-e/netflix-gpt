const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 w-1/2">{overview.replace(/(<([^>]+)>)/gi, "")}</p>
      <div>
        <button className="bg-white text-black px-4 py-2 w-32 rounded-sm">
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
