import { useState } from "react";
import { NavLink } from "react-router-dom";
import { cross_icon, cameraLogo, hamburger } from "./Images";
// export const cameraLogo = "../assets/cameraLogo.png";
// export const cross_icon = "../assets/Cross_icon.svg";
// export const hamburger = "../assets/hamburger_icon.svg";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed w-full bg-black/70 backdrop-blur-sm md-max:border-b py-4 sm:py-4 z-50">
      <div className="relative w-full px-4 sm-max:p-0">
        <div className="flex justify-between items-center">
          <div className="flex text-white items-center gap-4 font-bold text-2xl sm-max:px-0 sm-max:text-lg">
            <img
              src={cameraLogo}
              alt="logo"
              className="ml-5 w-20 h-10 object-cover"
            />
            <span>ImageHaven</span>
          </div>

          {/* Navigation links */}
          <div
            className={`${
              isMenuOpen ? "flex" : "md-max:hidden"
            } w-2/5 md-max:absolute md-max:w-full md-max:top-[57px] md-max:left-0 md-max:bg-black/90 md-max:py-8 flex-col md-max:flex-col md:py-0 md:bg-transparent p-5`}
          >
            <ul className="flex justify-between items-center gap-8 text-xl md-max:flex-col sm-max:text-xl sm-max:w-full font-bold text-teal-500">
              <li className="hover:text-orange-400 border-b-2 border-transparent hover:border-orange-400 transition-colors duration-300 ease-in-out">
                <NavLink to="ImageHaven_React/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li className="hover:text-orange-400 border-b-2 border-transparent hover:border-orange-400 transition-colors duration-300 ease-in-out">
                <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
                  About
                </NavLink>
              </li>
              <li className="hover:text-orange-400 border-b-2 border-transparent hover:border-orange-400 transition-colors duration-300 ease-in-out">
                <NavLink to="/feedback" onClick={() => setIsMenuOpen(false)}>
                  Feedback
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Hamburger and cross icons */}
          <div className="cursor-pointer hidden md-max:block sm-max:px-5">
            {isMenuOpen ? (
              <img src={cross_icon} alt="Close Menu" onClick={toggleMenu} />
            ) : (
              <img src={hamburger} alt="Open Menu" onClick={toggleMenu} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
