import imgLogo from "/assets/apra-logo.webp";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";

const DynamicNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-secondary-500 bg-white px-4 py-2 rounded-full shadow-md"
          : "text-secondary-500 px-4 py-2 "
      }
    >
      {children}
    </NavLink>
  );
};

function Navbar(){
    return(
        <>
            <nav className="bg-transparent">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3 px-4">
                <Link to="https://www.apracollegepusat.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={imgLogo} width={140} alt="Apra Logo" />
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-100 hover:text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium text-[18px] flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-12">
                        <li>
                            <DynamicNavLink to="/">Home</DynamicNavLink>
                        </li>
                        <li>
                            <DynamicNavLink to="/about">About</DynamicNavLink>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </>
    )
}

DynamicNavLink.propTypes = {
    to: PropTypes.string,
    children: PropTypes.string
};

export default Navbar