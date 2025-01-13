import imgLogo from "/assets/apra-logo.webp";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar(){
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () =>{
        setIsOpen(!isOpen)
    }

    return(
        <>
            <nav className="bg-transparent">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3 px-4">
                <Link to="https://www.apracollegepusat.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={imgLogo} width={140} alt="Apra Logo" />
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-100 hover:text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false" onClick={toggleSidebar}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium text-[18px] flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-12">
                        <li>
                            <Link className="text-secondary-400" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="text-secondary-400" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Sidebar */}
        <div
          className={`md-2:hidden shadow-xl fixed z-50 inset-y-0 left-0 w-64 bg-primary text-black transform ${isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
        >
          <div className="p-4 flex justify-between items-center h-fit">
            <img src={imgLogo} alt="" width="136px" />
            <button
              className="text-white focus:outline-none"
              onClick={toggleSidebar}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="#FFF"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
                <div className="flex flex-col space-y-4 p-4">
                    <Link
                    className="text-lg transition duration-200 ease-in text-white hover:text-primary-600"
                    to={"/"}
                    >
                    Home
                    </Link>
                    <Link
                    className="text-lg transition duration-200 ease-in text-white hover:text-primary-600"
                    to={"/about"}
                    >
                    About
                    </Link>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar