import { Route, Routes, Navigate } from "react-router-dom"; //navigate는 다른 페이지 갔을때 강제로 메인페이지로 가게하는것
import Home from "pages/home";
import PostList from "pages/posts";
import PostDetail from "pages/posts/detail";
import PostNew from "pages/posts/new";
import PostEdit from "pages/posts/edit";
import ProfilePage from "pages/profile";
import LoginPage from "pages/login";
import SignupPage from "pages/signup";

interface RouterProps {
  isAutheticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export default function Router({
  isAutheticated,
  setIsAuthenticated,
}: RouterProps) {
  return (
    <>
      <Routes>
        {isAutheticated ? ( //login된상태
          <>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/posts/new" element={<PostNew />} />
            <Route path="/posts/edit/:id" element={<PostEdit />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        ) : (
          <>
            <Route
              path="/login"
              element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route path="/signup" element={<SignupPage />} />
            <Route
              path="*"
              element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
            />
          </>
        )}
      </Routes>
    </>
  );
}
