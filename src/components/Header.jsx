import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";

import logout from "../assets/logout.svg";
import userLogo from "../assets/user.svg";
import { ShopContext } from "../Context/ShopContext";
import { AuthContext } from "../Context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpened, setmenuOpened] = useState(false);
  const toggleMenu = () => setmenuOpened(!menuOpened);
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5 z-10">
      <div className="px-1 gap-6 md:gap-0 md:px-4 flexBetween py-3 max-xs:px-2">
        {/* logo */}
        <div>
          <Link>
            {/* <img src={logo} alt="" height={66} width={88} /> */}
            <Link to={"/"} className="text-4xl font-semibold">
              BDSHOP
            </Link>
          </Link>
        </div>
        {/* navbar */}
        <Navbar
          containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}
        />
        {/* navbar mobile */}
        <Navbar
          containerStyles={`${
            menuOpened
              ? "flex items-center flex-col gap-y-12 fixed top-20 right-8 p-12  bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
              : "flex item-center flex-col gap-y-12 fixed top-20 p-12  bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
          }`}
        />

        {/* buttons */}
        <div className="flexBetween sm:gap-x-2 bold-16">
          {!menuOpened ? (
            <MdMenu
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full "
              onClick={toggleMenu}
            />
          )}
          <div className="flexBetween sm:gap-x-6">
            <NavLink to={"/cart-page"} className="flex">
              <FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full" />
              <span className="relative flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14 -top-2">
                {getTotalCartItems()}
              </span>
            </NavLink>
            {user ? (
              <>
                <NavLink
                  onClick={() => logOut()}
                  className={
                    "btn_secondary_rounded flexCenter gap-x-2 medium-16"
                  }
                >
                  <img src={logout} alt="logoutIcon" height={19} width={19} />
                  Logout
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to={"login"}
                  className={
                    "btn_secondary_rounded flexCenter gap-x-2 medium-16"
                  }
                >
                  <img src={userLogo} alt="userIcon" height={19} width={19} />
                  Login
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
