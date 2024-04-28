"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom"); //navigate는 다른 페이지 갔을때 강제로 메인페이지로 가게하는것
var home_1 = require("pages/home");
var posts_1 = require("pages/posts");
var detail_1 = require("pages/posts/detail");
var new_1 = require("pages/posts/new");
var edit_1 = require("pages/posts/edit");
var profile_1 = require("pages/profile");
var login_1 = require("pages/login");
var signup_1 = require("pages/signup");
function Router(_a) {
    var isAutheticated = _a.isAutheticated, setIsAuthenticated = _a.setIsAuthenticated;
    return (React.createElement(React.Fragment, null,
        React.createElement(react_router_dom_1.Routes, null, isAutheticated ? ( //login된상태
        React.createElement(React.Fragment, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(home_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "/posts", element: React.createElement(posts_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "/posts/:id", element: React.createElement(detail_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "/posts/new", element: React.createElement(new_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "/posts/edit/:id", element: React.createElement(edit_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "/profile", element: React.createElement(profile_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "*", element: React.createElement(react_router_dom_1.Navigate, { replace: true, to: "/" }) }))) : (React.createElement(React.Fragment, null,
            React.createElement(react_router_dom_1.Route, { path: "/login", element: React.createElement(login_1["default"], { setIsAuthenticated: setIsAuthenticated }) }),
            React.createElement(react_router_dom_1.Route, { path: "/signup", element: React.createElement(signup_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "*", element: React.createElement(login_1["default"], { setIsAuthenticated: setIsAuthenticated }) }))))));
}
exports["default"] = Router;
