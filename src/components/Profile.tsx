import AuthContext from "context/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import { app } from "firebaseApp";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

// const onSignOut = async () => {
//   try {
//     const auth = getAuth(app);
//     await signOut(auth);
//     toast.success("로그아웃 되었습니다.");
//   } catch (error: any) {
//     console.log(error);
//     toast.error(error?.code);
//   }
// };

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="profile_box">
      <div className="flex_box-lg">
        <div className="profle_image" />
        <div>
          <div className="profile_email">{user?.email}</div>
          <div className="profile_name">{user?.displayName || "사용자"} </div>
        </div>
      </div>
      {/* {user ? ( //user있으면 로그인상태, 앞에가 true 이면 and 실행
        <div role="presentation" className="profile_logout" onClick={onSignOut}>
          로그아웃
        </div>
      ) : (
        <a href="/login" className="profile_logout">
          로그인
        </a>
      )} */}
    </div>
  );
}
