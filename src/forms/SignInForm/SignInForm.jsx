import { useEffect, useRef, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Icon } from "@iconify/react";
import Spinner from "../../components/Spinner/Spinner";
import getErrorMessage from "../../utils/getErrorMessage";
import Toast from "../../components/Toast/Toast";
import auth from "../../firebase/firebase";
import "./SignInForm.css";

export default function SignInForm({
  register,
  callback,
  forgotPasswordCallback,
  loading,
  error,
  notification,
}) {
  const [signInWithGoogle, , signingInWithGoogle, googleSignInError] =
    useSignInWithGoogle(auth);

  const [err, setErr] = useState(error);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (err) {
      timeoutId = setTimeout(() => {
        setErr(null);
      }, 3000);
    }

    // clean up the timeout on unmount
    return () => {
      clearTimeout(timeoutId);
    };
  }, [err]);

  // handle sign in or register
  const handleSubmit = (e) => {
    e.preventDefault();

    setErr(null);

    const formdata = Object.fromEntries(new FormData(e.target).entries());

    if (
      formdata.confirmedPassword &&
      formdata.password !== formdata.confirmedPassword
    ) {
      return setErr({
        code: "auth/password-mismatch",
      });
    }

    // call signin or register callback
    callback(formdata);
  };

  // handle forgot password request
  const emailRef = useRef(null);

  const handleForgotPassword = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;

    if (!email) {
      return setErr({
        code: "auth/invalid-email",
      });
    }

    forgotPasswordCallback(email, setShowToast);
  };

  // handle google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  // navigate authenticated users to home page
  const [user, loadingAuthState] = useAuthState(auth);

  const location = useLocation();

  if (loadingAuthState) {
    return <Spinner />;
  }

  if (user) {
    return <Navigate to={"/"} state={{ from: location }} replace />;
  }

  return (
    <main className="sign p-4 mx-auto">
      <h1 className="pb-2 text-center">
        {register ? "Register an Account" : "Sign In to your Account"}
      </h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="form-label">
          Enter Your Email Address
        </label>
        <input
          ref={emailRef}
          className="form-control"
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          required
        />

        <br />

        <label htmlFor="password" className="form-label">
          {register ? "Choose a Strong Password" : "Enter Your Password"}
        </label>
        <input
          className="form-control"
          type="password"
          name="password"
          id="password"
          autoComplete={register ? "new-password" : "current-password"}
          required
        />
        {!register && (
          <>
            <button
              onClick={handleForgotPassword}
              className="btn btn-link px-0 my-2"
            >
              Forgot Password?
            </button>
            <Toast showToast={showToast} setShowToast={setShowToast} />
          </>
        )}

        {register && (
          <>
            <br />
            <label htmlFor="confirmedPassword" className="form-label">
              Confirm Password
            </label>
            <input
              className="form-control"
              type="password"
              name="confirmedPassword"
              id="confirmedPassword"
              autoComplete="new-password"
              required
            />
          </>
        )}

        <br />

        <button className="px-5 btn btn-primary d-block mx-auto" type="submit">
          {loading ? (
            <div class="spinner-border text-light" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : register ? (
            "Register"
          ) : (
            "Sign In"
          )}
        </button>

        {err && (
          <p className="pt-3 text-danger text-center">{getErrorMessage(err)}</p>
        )}

        {notification && (
          <p className="pt-3 text-success text-center">{notification}</p>
        )}
      </form>

      <div className="d-flex gap-3 my-4 align-items-center">
        <hr className="flex-grow-1 m-0" />
        <span>Or,</span>
        <hr className="flex-grow-1 m-0" />
      </div>

      <button
        onClick={handleGoogleSignIn}
        className="px-5 btn btn-primary d-flex gap-2 mx-auto align-items-center"
      >
        {signingInWithGoogle ? (
          <div class="spinner-border text-light m-1" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>
            <Icon icon="flat-color-icons:google"></Icon>
            Sign in Using Google
          </>
        )}
      </button>

      {googleSignInError && (
        <p className="pt-3 text-danger text-center">
          {getErrorMessage(googleSignInError)}
        </p>
      )}
    </main>
  );
}
