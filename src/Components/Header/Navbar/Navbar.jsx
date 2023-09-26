import { NavLink } from "react-router-dom";
import NavbarLogo from "./NavbarLogo";

const Navbar = () => {
     return (
          <div>
               <nav className="container mx-auto md:flex md:justify-between items-center text-lg font-bold">
                    <NavbarLogo></NavbarLogo>
                    <div className="flex gap-2 md:gap-7 justify-center mt-3 md:mt-0">
                         <NavLink
                              to="/"
                              className={({ isActive, isPending }) =>
                                   isPending
                                        ? "pending"
                                        : isActive
                                        ? "text-[#FF444A] underline"
                                        : ""
                              }
                         >
                              Home
                         </NavLink>
                         <NavLink
                              to="/donation"
                              className={({ isActive, isPending }) =>
                                   isPending
                                        ? "pending"
                                        : isActive
                                        ? "text-[#FF444A] underline"
                                        : ""
                              }
                         >
                              Donation
                         </NavLink>
                         <NavLink
                              to="/statistics"
                              className={({ isActive, isPending }) =>
                                   isPending
                                        ? "pending"
                                        : isActive
                                        ? "text-[#FF444A] underline "
                                        : ""
                              }
                         >
                              Statistics
                         </NavLink>
                    </div>
               </nav>
          </div>
     );
};

export default Navbar;
