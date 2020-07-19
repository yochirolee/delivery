import Link from "next/link";
import React, { useContext } from "react";
import { useState } from "react";
import ShopCart from "../components/main/shopCart";
import { ProductsInCartContext } from "../context/productInCartContext";
import { withUser } from "../hoc/withUser";
import {AuthContext} from '../context/auth';

function Header({ main, home, user, onLogout }) {
  const auth =useContext(AuthContext);
  const [isLoggin, setLogin] = useState(user);
  const [toggleUser, setToggleUser] = useState(true);
  const [toggleCart, setToggleCart] = useState(true);
  const [productsInCart, setProductsInCart] = useContext(ProductsInCartContext);

  const HandleToogleUser = () => {
    setToggleUser(!toggleUser);
  };
  const HandleToogleCart = () => {
    setToggleCart(!toggleCart);
  };


  const doSignOut=()=>
  {
    auth.removeAuth();
  }

 

  return (
    
      <nav className="flex items-center  justify-between flex-wrap bg-gray-700 p-2 w-full px-20">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/">
            <a className="font-semibold text-xl tracking-tight text-white">
              Restaurant App
            </a>
          </Link>
        </div>
       

        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link href="/main">
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Menu
              </a>
            </Link>
            <Link href="/dashboard">
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Dashboard
              </a>
            </Link>
          </div>
          <div className="w-64 flex">
            {!isLoggin ? (
              <div></div>
            ) : (
              <div className="flex items-center">
                <div className="w-auto mr-4 text-white">
                
                  {user.displayName}
                </div>
                <div onClick={HandleToogleUser} className="relative ">
                  <button className=" flex z-10 block h-8 w-8 rounded-full overflow-hidden shadow ">
                    <img
                      className="h-full w-full object-cover"
                      src={user.photoURL}
                      alt="Your avatar"
                    />
                  </button>

                  <div
                    className={
                      toggleUser
                        ? "absolute right-0 mt-2 hidden py-2 w-48 bg-white rounded-md shadow-xl z-20"
                        : " absolute right-0 mt-2 block py-2 w-48 bg-white rounded-md shadow-xl z-20"
                    }
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                    >
                      Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                    >
                      Products
                    </a>
                    <a
                      href="#"
                      onClick={doSignOut}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                    >
                      Logout
                    </a>
                  </div>
                </div>
                {!main && (
                  <div className="relative ">
                    <div className="flex flex-row">
                      <button
                        className="flex mx-4 text-gray-600 "
                        onClick={HandleToogleCart}
                      >
                        <i className="h-8 w-8 text-2xl fa fa-shopping-cart flex"></i>
                        <div className="h-5 w-5  bg-red-500 ml-0 absolute ml-3 w-96 rounded-full text-white ">
                          <span className="bold relative">
                            {productsInCart.length}
                          </span>
                        </div>
                      </button>
                    </div>
                    <div
                      className={
                        toggleCart
                          ? "absolute right-0 mt-2 hidden px-0 py-2 w-64 bg-white rounded-md shadow-xl z-20"
                          : " absolute right-0 mt-2 block py-2 w-64 bg-white rounded-md shadow-xl z-20"
                      }
                    >
                      <ShopCart productsInCart={productsInCart} />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
   
  );
}

export default withUser(Header);
