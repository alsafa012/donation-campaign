import { NavLink } from "react-router-dom";
import NavbarLogo from "./NavbarLogo";

const Navbar = () => {
     return (
          <div>
               <nav className="container mx-auto flex justify-between items-center md:text-lg font-medium md:font-bold">
                    <NavbarLogo></NavbarLogo>
                    <div className="flex gap-2 md:gap-7">
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
