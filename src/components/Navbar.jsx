import React, { useContext, useState } from "react";
import foodspace from "../assets/home2.png";
import { FaBars, FaCartShopping, FaGear } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { MdTrolley } from "react-icons/md";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { BiHelpCircle } from "react-icons/bi";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { AiFillHome, AiOutlineCloseCircle } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { cartItems } = useContext(ShopContext);

  const totalQuantity = Object.values(cartItems).reduce(
    (total, quantity) => total + quantity,
    0
  );

  return (
    <div className="container max-w-full fixed z-50">
      <div className="sm:hidden md:h-20 md:flex md:justify-around md:items-center bg-white border-b-2 shadow-md">
        <div>
          <img
            src={foodspace}
            alt="foodspace logo"
            className="hidden md:inline-block h-20 w-64"
          />
        </div>
        <div className="space-x-10 hidden md:flex items-center">
          <Link
            to={"/heroPage"}
            className="text-lg text-gray-700 font-semibold hover:text-gray-500 outline-none"
          >
            Home
          </Link>
          <Link
            smooth
            to="#menu"
            className="text-base text-gray-700 font-semibold hover:text-gray-500 outline-none"
          >
            Menu
          </Link>
          <Link
            smooth
            to="#contact"
            className="text-base text-gray-700 font-semibold hover:text-gray-500 outline-none"
          >
            Contact
          </Link>
          <Link
            smooth
            to="#faq"
            className="text-base text-gray-700 font-semibold hover:text-gray-500 uppercase outline-none"
          >
            Faq
          </Link>
          <Link to={"storeCart"} className="flex items-end">
            <FaCartShopping className="text-xl text-gray-700 font-semibold hover:text-gray-500 uppercase outline-none" />
            <p className="text-sm font-semibold ml-1">{totalQuantity}</p>
          </Link>
        </div>
        <Link
          to={"/"}
          className="border-2 border-red-400 px-6 py-1 rounded-md hover:bg-red-100 hidden md:inline-block outline-none"
        >
          <div className="text-base text-red-500 hover:text-red-600 font-semibold">
            Login
          </div>
        </Link>
      </div>

      {/* Mobile Section */}

      {isOpen ? (
        <div className="bg-black opacity-60 fixed w-full h-screen top-0 left-0"></div>
      ) : (
        ""
      )}

      <div className="h-16 w-full bg-white flex justify-between items-center px-5 border-b-2 shadow-md md:hidden">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-900 cursor-pointer outline-none"
        >
          <FaBars className="text-xl" />
        </div>
        <div>
          <img src={foodspace} alt="foodspace logo" className="h-10" />
        </div>
        <Link to={"storeCart"} className="flex items-end">
          <FaCartShopping className="text-xl text-gray-900 outline-none" />
          <p className="text-xs font-semibold">{totalQuantity}</p>
        </Link>
        <div
          className={
            isOpen
              ? "bg-red-700 h-screen w-[60%] absolute top-0 left-0 duration-1000"
              : "bg-red-700 h-screen w-3/4 absolute top-0 left-[-100%] duration-1000"
          }
        >
          <div className="flex justify-end px-4 mt-7">
            <AiOutlineCloseCircle
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl cursor-pointer"
            />
          </div>
          <div className="space-y-7 mt-16">
            <Link
              to={"/heroPage"}
              className="flex items-center text-white space-x-3 px-2 outline-none"
            >
              <AiFillHome className="text-xl" />
              <p>Home</p>
            </Link>
            <div className="border-t border-gray-300 w-[96%] mx-auto"></div>
            <Link className="flex items-center text-white space-x-3 px-2 outline-none">
              <IoIosContact className="text-xl" />
              <p>Profile</p>
            </Link>
            <div className="border-t border-gray-300 w-[96%] mx-auto"></div>
            <Link
              to={"storeCart"}
              className="flex items-center text-white space-x-3 px-2 outline-none"
            >
              <MdTrolley className="text-xl" />
              <p>My Orders</p>
            </Link>
            <div className="border-t border-gray-300 w-[96%] mx-auto"></div>
            <Link className="flex items-center text-white space-x-3 px-2 outline-none">
              <MdOutlinePrivacyTip className="text-xl" />
              <p>Privacy Policy</p>
            </Link>
            <div className="border-t border-gray-300 w-[96%] mx-auto"></div>
            <Link className="flex items-center text-white space-x-3 px-2 outline-none">
              <FaGear className="text-xl" />
              <p>Settings</p>
            </Link>
            <div className="border-t border-gray-300 w-[96%] mx-auto"></div>
            <Link className="flex items-center text-white space-x-3 px-2 outline-none">
              <BiHelpCircle className="text-xl" />
              <p>Help</p>
            </Link>
            <div className="border-t border-gray-300 w-[96%] mx-auto"></div>
            <Link className="flex items-center text-white space-x-3 px-2 outline-none">
              <LiaSignOutAltSolid className="text-xl" />
              <p>Sign Out</p>
            </Link>
            <div className="border-t border-gray-200 w-[96%] mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
