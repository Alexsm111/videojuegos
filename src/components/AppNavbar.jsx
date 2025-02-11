import { NavLink, Link } from "react-router-dom";
import webLogo from "../assets/react.svg";

const links = [
  { name: "Home", path: "/" },
  { name: "Games", path: "/games" },
];

function AppNavbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-xl rounded-xl mb-6 border-b-2 border-primary-500/20">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-6">
        <Link to="/" className="flex items-center space-x-3 hover:text-primary-400 transform transition-all duration-300">
          <img src={webLogo || "/placeholder.svg"} className="h-10 animate-spin-slow" alt="Web Logo" />
          <span className="text-white text-2xl font-bold font-sans tracking-tight">Game Explorer</span>
        </Link>
        <div className="hidden md:block">
          <ul className="flex space-x-8 text-white font-medium">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-all duration-300 transform hover:text-primary-400 hover:scale-105 ${
                      isActive ? "text-primary-200 font-bold" : "text-gray-300"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AppNavbar;
