import AuthContext from "context/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import { app } from "firebaseApp";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const onSignOut = async () => {
  try {
    const auth = getAuth(app);
    await signOut(auth);
    toast.success("로그아웃 되었습니다.");
  } catch (error: any) {
    console.log(error);
    toast.error(error?.code);
  }
};

export default function Header() {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  return (
    <header className="header">
      <Link to="/" className="header_logo">
        React Blog
      </Link>

      <div>
        {/* <Link to="/posts/new">글쓰기</Link>
        <Link to="/posts">게시글</Link>
        <Link to="/profile">프로필</Link> */}
        {user ? ( //user있으면 로그인상태, 앞에가 true 이면 and 실행
          <div
            role="presentation"
            className="profile_logout"
            onClick={onSignOut}
          >
            로그아웃
          </div>
        ) : (
          location.pathname !== "/login" && (
            <a href="/login" className="profile_logout">
              로그인
            </a>
          )
        )}
      </div>
    </header>
  );
}
