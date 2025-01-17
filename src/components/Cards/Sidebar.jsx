import React from "react";
import { Link, useLocation } from "react-router-dom";
import NotificationDropdown from "../NotificationDropdown";
import UserDropdown from "../UserDropdown";
import { HiOutlineMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const location = useLocation();
  return (
    <>
      <nav className="md:left-0 md:block  md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden bg-gradient-to-b md:bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg  flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto ">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <HiOutlineMenu />
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="#"
          >
            Admin Panel
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-slate-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="#"
                  >
                    Admin Panel
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <MdClose />
                  </button>
                </div>
              </div>
            </div>

            {/* Heading */}
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Orders
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/all-products") !== -1
                      ? "text-orange-500 hover:text-orange-600"
                      : "text-slate-700 hover:text-slate-500")
                  }
                  to="/all-products"
                >
                  <i
                    className={
                      "fas fa-tools mr-2 text-sm " +
                      (window.location.href.indexOf("/all-products") !== -1
                        ? "opacity-75"
                        : "text-slate-300")
                    }
                  ></i>{" "}
                  All Products
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/addproduct") !== -1
                      ? "text-orange-500 hover:text-orange-600"
                      : "text-slate-700 hover:text-slate-500")
                  }
                  to="/addproduct"
                >
                  <i
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/addproduct") !== -1
                        ? "opacity-75"
                        : "text-slate-300")
                    }
                  ></i>{" "}
                  Add Products
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              categories
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/all-categories") !== -1
                      ? "text-orange-500 hover:text-orange-600"
                      : "text-slate-700 hover:text-slate-500")
                  }
                  to="/all-categories"
                >
                  <i
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/all-categories") !== -1
                        ? "opacity-75"
                        : "text-slate-300")
                    }
                  ></i>{" "}
                  All Categories
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/add-categories") !== -1
                      ? "text-orange-500 hover:text-orange-600"
                      : "text-slate-700 hover:text-slate-500")
                  }
                  to="/add-categories"
                >
                  <i
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/add-categories") !== -1
                        ? "opacity-75"
                        : "text-slate-300")
                    }
                  ></i>{" "}
                  Add Categories
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}

            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/all-coupons") !== -1
                      ? "text-orange-500 hover:text-orange-600"
                      : "text-slate-700 hover:text-slate-500")
                  }
                  to="/all-coupons"
                >
                  <i
                    className={
                      "fas fa-tools mr-2 text-sm " +
                      (window.location.href.indexOf("/all-coupons") !== -1
                        ? "opacity-75"
                        : "text-slate-300")
                    }
                  ></i>{" "}
                  All coupons
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/add-coupon") !== -1
                      ? "text-orange-500 hover:text-orange-600"
                      : "text-slate-700 hover:text-slate-500")
                  }
                  to="/add-coupon"
                >
                  <i
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/add-coupon") !== -1
                        ? "opacity-75"
                        : "text-slate-300")
                    }
                  ></i>{" "}
                  Add coupon
                </Link>
              </li>
            </ul>

            <hr className="my-4 md:min-w-full" />

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/orders") !== -1
                      ? "text-orange-500 hover:text-orange-600"
                      : "text-slate-700 hover:text-slate-500")
                  }
                  to="/orders"
                >
                  <i
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/orders") !== -1
                        ? "opacity-75"
                        : "text-slate-300")
                    }
                  ></i>{" "}
                  Orders
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/messages") !== -1
                      ? "text-orange-500 hover:text-orange-600"
                      : "text-slate-700 hover:text-slate-500")
                  }
                  to="/messages"
                >
                  <i
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/messages") !== -1
                        ? "opacity-75"
                        : "text-slate-300")
                    }
                  ></i>{" "}
                  Messages
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/account-setting") !== -1
                      ? "text-orange-500 hover:text-orange-600"
                      : "text-slate-700 hover:text-slate-500")
                  }
                  to="/account-setting"
                >
                  <i
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/account-setting") !== -1
                        ? "opacity-75"
                        : "text-slate-300")
                    }
                  ></i>{" "}
                  Account setting
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/logout") !== -1
                      ? "text-orange-500 hover:text-orange-600"
                      : "text-slate-700 hover:text-slate-500")
                  }
                  to="/logout"
                >
                  <i
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/logout") !== -1
                        ? "opacity-75"
                        : "text-slate-300")
                    }
                  ></i>{" "}
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
