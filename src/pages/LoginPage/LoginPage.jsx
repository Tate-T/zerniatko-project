import SignHeader from "../../components/SignMenu/SignHeader";
import {LoginMenu} from "../../components/SignMenu/LoginMenu/LoginMenu";
import SignFooter from "../../components/SignMenu/SignFooter";

export default function LoginPage() {
  return (
    <>
      <SignHeader />
      <LoginMenu />
      <SignFooter />
    </>
  );
}
