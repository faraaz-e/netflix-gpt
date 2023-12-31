import { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

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

    if (errorMessage) return;

    if (!isSignInForm) {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setError(error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // Sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " " + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img className="h-screen w-screen object-cover" src={BG_URL} alt="login_bg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-4 md:p-12 bg-black top-20 left-1 md:left-1/3 bg-opacity-90 flex flex-col"
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
        <p className="py-4 m-3 text-stone-500 m-3 text-sm">
          Disclaimer: This App is for educational purpose only.
        </p>
      </form>
    </div>
  );
};

export default Login;
