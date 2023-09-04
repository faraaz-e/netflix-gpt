import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login_bg"
        />
      </div>
      <form className="absolute p-12 bg-black top-1/4 left-1/3 opacity-90 flex flex-col">
        <label className="text-left font-bold text-white text-3xl pb-8">
          Sign In
        </label>
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-3 m-3 w-80 rounded-lg bg-stone-800 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 m-3 w-80 rounded-lg bg-stone-800 text-sm text-white"
        />
        <button className="p-3 m-3 w-80 rounded-lg font-bold bg-red-600 text-white">
          Sign In
        </button>

        <p className="py-4 text-white text-center">New to Netflix ? Sign up now</p>
      </form>
    </div>
  );
};

export default Login;
