import { useEffect, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import SignInForm from "../../forms/SignInForm/SignInForm";
import auth from "../../firebase/firebase";

export default function SignIn() {
  const [notification, setNotification] = useState("");

  useEffect(() => {
    let timeoutId;

    // clean timeout on unmount
    if (notification) {
      timeoutId = setTimeout(() => {
        setNotification(null);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [notification]);

  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);

  // sign in user callback
  const callback = (formdata) => {
    const { email, password } = formdata;

    signInWithEmailAndPassword(email, password);
  };

  // forgot password callback
  const forgotPasswordCallback = (email, setShowToast) => {
    setShowToast(true);

    sendPasswordResetEmail(auth, email).then(() => {
      setNotification("Password reset email sent");
      setShowToast(false);
    });
  };

  return (
    <SignInForm
      callback={callback}
      forgotPasswordCallback={forgotPasswordCallback}
      loading={loading}
      error={error}
      // force SignInForm to rerender when error changes
      key={error}
      notification={notification}
    />
  );
}
