import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="bg-black h-screen">
      <form className="flex justify-center pt-28">
        <input
          type="text"
          className="p-2 mx-3 w-96 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 bg-red-600 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
