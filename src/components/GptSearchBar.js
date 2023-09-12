const GptSearchBar = () => {
  return (
    <div className="bg-black h-screen">
      <form className="flex justify-center pt-28">
        <input
          type="text"
          className="p-2 mx-3 w-96 rounded-lg"
          placeholder="What would you like to watch ?"
        />
        <button className="py-2 px-4 bg-red-600 text-white rounded-lg">Search</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
