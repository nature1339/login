import { useEffect, useState } from "react";
import { app } from "firebaseApp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Router from "./components/Router";
import Loader from "components/Loader";

function App() {
  const auth = getAuth(app);
  // auth를 체크하기 전에 (initialize전)에는 loader를 띄워주기 위한 용도
  const [init, setInit] = useState<boolean>(true);
  // auth의 currentUser가 있으면 authenticated로 변경
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  return (
    <>
      <ToastContainer />
      {init ? (
        <Router
          isAutheticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
      ) : (
        <Loader />
      )}
    </> //init 은 로그인되었을때만 login페이지 보여줌
  );
}

export default App;
