import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from "../firabase/firebase.config";

const AuthContex = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContex = () => useContext(AuthContex);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  // Auth
  const auth = getAuth(app);

  //  Login  with  provider
  const loginWithProvider = (provider) => {
    return signInWithPopup(auth, provider);
  };

  // set a  objorver
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unSubscribe;
  }, [auth]);

  const authInfo = { user, loginWithProvider };
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
