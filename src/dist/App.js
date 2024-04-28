"use strict";
exports.__esModule = true;
var react_1 = require("react");
var firebaseApp_1 = require("firebaseApp");
var auth_1 = require("firebase/auth");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var Router_1 = require("./components/Router");
var Loader_1 = require("components/Loader");
function App() {
  var auth = auth_1.getAuth(firebaseApp_1.app);
  // auth를 체크하기 전에 (initialize전)에는 loader를 띄워주기 위한 용도
  var _a = react_1.useState(true),
    init = _a[0],
    setInit = _a[1];
  // auth의 currentUser가 있으면 authenticated로 변경
  var _b = react_1.useState(
      !!(auth === null || auth === void 0 ? void 0 : auth.currentUser)
    ),
    isAuthenticated = _b[0],
    setIsAuthenticated = _b[1];
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(react_toastify_1.ToastContainer, null),
    init
      ? React.createElement(Router_1["default"], {
          isAutheticated: isAuthenticated,
          setIsAuthenticated: setIsAuthenticated,
        })
      : React.createElement(Loader_1["default"], null)
  ); //init 은 로그인되었을때만 login페이지 보여줌
}
exports["default"] = App;
