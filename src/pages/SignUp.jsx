import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const SignUp = () => {
  const { CreateUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.form?.pathname || "/";

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);
    CreateUser(email, password).then(() => {
      navigate(from);
    });
  };

  return (
    <section
      className="max_padd_container flexCenter flex-col pt-32
"
    >
      <form
        onSubmit={handleSignUp}
        className="max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md"
      >
        <h3 className="h3">Sign Up</h3>
        <div className="flex flex-col gap-4 mt-7">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
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
          Sign Up
        </button>
        <p className="text-black font-bold">
          Already have an Account?{" "}
          <Link
            to={"/login"}
            className="text-secondary underline cursor-pointer"
          >
            Login
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

export default SignUp;
