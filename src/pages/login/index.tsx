import Header from "components/Header";
import LoginForm from "components/LoginForm";

export default function LoginPage(props: {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}) {
  return (
    <>
      <Header />
      <LoginForm setIsAuthenticated={props.setIsAuthenticated} />
    </>
  );
}
