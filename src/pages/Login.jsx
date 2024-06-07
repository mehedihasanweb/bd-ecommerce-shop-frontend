import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

/* eslint-disable react/no-unescaped-entities */
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.form?.pathname || "/";

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    signIn(email, password).then(() => {
      navigate(from);
    });
  };
  return (
    <section
      className="max_padd_container flexCenter flex-col pt-32
    "
    >
      <form
        onSubmit={handleSignIn}
        className="max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md"
      >
        <h3 className="h3">Sign In</h3>
        <div className="flex flex-col gap-4 mt-7">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
        </div>
        <button className="btn_dark_rounded my-5 w-full !rounded-md">
          Login
        </button>
        <p className="text-black font-bold">
          Don't have an Account?{" "}
          <Link
            to={"/signup"}
            className="text-secondary underline cursor-pointer"
          >
            Sign Up
          </Link>
        </p>
        <div className="flexCenter mt-6 gap-3">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </form>
    </section>
  );
};
export default Login;
