import auth from "../../firebase/firebase";
import SignInForm from "../../forms/SignInForm/SignInForm";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { sendEmailVerification } from "firebase/auth";

export default function Register() {
  const [notification, setNotification] = useState("");

  useEffect(() => {
    let timeoutId;

    if (notification) {
      timeoutId = setTimeout(() => {
        setNotification(null);
      }, 3000);
    }

    // clean timeout on unmount
    return () => {
      clearTimeout(timeoutId);
    };
  }, [notification]);

  let [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // register user callback
  const callback = (formdata) => {
    const { email, password } = formdata;

    createUserWithEmailAndPassword(email, password).then(() => {
      if (auth.currentUser && !auth.currentUser.emailVerified) {
        sendEmailVerification(auth.currentUser).then(() => {
          setNotification("Verification email sent");
        });
      }
    });
  };

  return (
    <SignInForm
      register
      callback={callback}
      loading={loading}
      error={error}
      // force SignInForm to rerender when error changes
      key={error}
      notification={notification}
    />
  );
}
