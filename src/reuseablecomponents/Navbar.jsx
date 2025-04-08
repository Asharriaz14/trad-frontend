import { useState, useEffect, memo, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("auth token");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navbarLinks = [
    { name: "Home", path: "/" },
    { name: "Trading", path: "/" },
    { name: "Contact Us", path: "/contactus" },
  ];

  const authLinks = [
    {
      name: "Sign Up",
      path: "/register",
      className:
        "bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700",
    },
    {
      name: "Login",
      path: "/login",
      className:
        "text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium",
    },
  ];

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={
        token
          ? "hidden"
          : `fixed top-0 w-full bg-white px-4 lg:px-8 xl:px-16 py-2 z-50 transition duration-300 ${
              isScrolled ? "shadow-md" : ""
            }`
      }
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center">
            <img
              src="/public/logo-bg-removed.png"
              height="50"
              width="50"
              alt="Website Logo"
            />
          </Link>

          <div className="hidden md:flex space-x-6">
            {navbarLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="relative text-black hover:text-btn-hover transition group hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {authLinks.map((item, index) => (
            <Link key={index} to={item.path} className={item.className}>
              {item.name}
            </Link>
          ))}
        </div>

        <button
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
          className="md:hidden text-primary focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4  shadow-md p-4 rounded">
          <div className="flex flex-col space-y-2">
            {navbarLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <hr className="my-2" />
            {authLinks.map((item, index) => (
              <Link
                key={`auth-${index}`}
                to={item.path}
                className="block text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default memo(Navbar);
