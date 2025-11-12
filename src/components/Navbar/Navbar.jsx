import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, Links, NavLink } from "react-router";
import { IoAddCircle, IoLogIn, IoLogOut } from "react-icons/io5";
import { FaEarListen, FaFirstOrderAlt, FaGear } from "react-icons/fa6";
import { FaCashRegister, FaHome, FaUser } from "react-icons/fa";
import logo from "../../assets/logo pawmart.png";
import { MdPets } from "react-icons/md";
import { GiLoveMystery } from "react-icons/gi";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");


  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);


  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };




  return (
    <div className="navbar w-11/12  mx-auto py-0 min-h-0 z-1  h-18  shadow-sm glass-card bg-[#D9BFA2]">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="  menu  menu-sm dropdown-content bg-base-100 rounded-box z-1 mb-20  w-52 p-2 shadow"
          >
            <li className=" "> 
            <NavLink to={"/"}> <FaHome />Home</NavLink>
          </li>
          <li>
            <NavLink to={"/allpetsupplies"}><MdPets />Pets &amp; Supplies</NavLink>
          </li>
            <li>
            <NavLink to={"/addlisting"}><FaEarListen />Add Listing</NavLink>
           </li>
            <li>
            <NavLink to={"/mylistings"}><GiLoveMystery />My Listings</NavLink>
           </li>
            <li>
            <NavLink to={"/myorders"}><FaFirstOrderAlt />My Orders</NavLink>
           </li>
          </ul>
        </div>
        <div>
          <Link to={"/"} className="flex items-center gap-1 text-[14px] lg:text-xl md:text-xl font-bold">
            <img className="w-8 md:w-12  lg:w-14" src={logo} alt="PawMart Logo" />
            <span>PawMart</span>
        </Link>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-2 sm:ml-16">
           <li className="md:text-[11px]  lg:text-[14px]"> 
            <NavLink to={"/"}> <FaHome />Home</NavLink>
          </li>
          <li className="md:text-[11px] lg:text-[14px]">
            <NavLink to={"/allpetsupplies"}><MdPets />Pets &amp; Supplies</NavLink>
          </li>
            <li className="md:text-[11px] lg:text-[14px]">
            <NavLink to={"/addlisting"}><FaEarListen />Add Listing</NavLink>
           </li>
            <li className="md:text-[11px] lg:text-[14px]">
            <NavLink to={"/mylistings"}><GiLoveMystery />My Listings</NavLink>
           </li>
            <li className="md:text-[11px] lg:text-[14px]">
            <NavLink to={"/myorders"}><FaFirstOrderAlt />My Orders</NavLink>
           </li>
          
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 border-2 border-gray-300 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  referrerPolicy="no-referrer"
                  src={
                    user?.photoURL ||
                    "https://cdn-icons-png.flaticon.com/512/847/847969.png"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu opacity-100  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <div className=" pb-3 border-b border-b-gray-200">
                <li className="text-sm font-bold">{user.displayName}</li>
                <li className="text-xs">{user.email}</li>
              </div>
              <li className="mt-3 mb-2">
                <Link to={"/profile"}>
                  <FaUser /> Profile
                </Link>
              </li>
              

              {/* <li>
                <a>
                  {" "}
                  <FaGear /> Settings
                </a>
              </li> */}

               <input
           onChange={(e) => handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle"/>
              <li>
                <button
                  onClick={signOutUser}
                  className="btn mt-2 w-full rounded-xl md:text-[10px] md:p-2  lg:text-[12px] lg:p-4 border-gray-300  btn-sm bg-primary text-white"
                >
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link
            to={"/auth/login"}
            className="btn rounded-full md:text-[10px] md:p-2  lg:text-[16px] lg:p-6 border-gray-300  btn-sm bg-primary text-white"
          >
            {" "}
            <IoLogIn /> Login
          </Link>
            <Link
            to={"/auth/register"}
            className="btn rounded-full md:text-[10px] md:p-2  lg:text-[16px] lg:p-6 border-gray-300  btn-sm bg-primary text-white"
          >
            {" "}
            <FaCashRegister /> Register
          </Link>
        
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
