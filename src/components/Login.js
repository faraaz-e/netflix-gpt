import { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate form data
    const errorMessage = validateData(
      isSignInForm ? name.current : name.current.value,
      email.current.value,
      password.current.value
    ); // args received from useRef Hook
    setError(errorMessage);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login_bg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black top-20 left-1/3 bg-opacity-90 flex flex-col"
      >
        <h1 className="text-left font-bold text-white text-3xl pb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full name"
            className="p-3 m-3 w-80 rounded-lg bg-stone-800 text-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="p-3 m-3 w-80 rounded-lg bg-stone-800 text-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 m-3 w-80 rounded-lg bg-stone-800 text-white"
        />

        <p className="mx-3 py-2 text-sm text-amber-600">{error}</p>

        <button
          className="p-3 m-3 w-80 rounded-lg font-medium bg-red-600 text-white"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 m-3 text-stone-500 m-3">
          {isSignInForm ? "New to Netflix ? " : "Already a user ? "}
          <span
            className="hover:underline hover:cursor-pointer font-medium text-white"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now" : "Sign in now"}
          </span>
          .
        </p>
      </form>
    </div>
  );
};

export default Login;