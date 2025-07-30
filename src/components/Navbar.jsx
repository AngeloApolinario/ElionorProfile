import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass =
    "text-gray-300 hover:text-white transition duration-200 px-3 py-2 rounded-md text-lg";

  const activeClass = "text-blue-500 font-semibold";

  return (
    <nav className="bg-gray-900 py-6 shadow-md">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-10">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? `${linkClass} ${activeClass}` : linkClass
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${linkClass} ${activeClass}` : linkClass
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? `${linkClass} ${activeClass}` : linkClass
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${linkClass} ${activeClass}` : linkClass
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
