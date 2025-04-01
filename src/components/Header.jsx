import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// Custom Drone SVG for Background Decoration
const DroneBackgroundSVG = ({ className }) => (
  <svg
    className={className}
    width="80"
    height="80"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 4v2m0 12v2m8-8h-2m-12 0H4m15.071-4.071l-1.414 1.414M6.343 15.657l-1.414 1.414m0-8.728l1.414 1.414m12.728 8.728l-1.414-1.414" />
    <circle cx="12" cy="12" r="2" />
    <path d="M12 10a2 2 0 0 0-2 2m2-2a2 2 0 0 1 2 2m-2-2v4m2-2H10" />
  </svg>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close the menu when the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-gradient-to-r from-[#d3d4d5] to-[#e6f5ff] shadow sticky top-0 z-50 py-4 relative animate-fade-in">
      {/* Background Overlay */}


      {/* Drone-Themed Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <DroneBackgroundSVG className="absolute top-2 left-2 opacity-20" />
        <DroneBackgroundSVG className="absolute bottom-2 right-2 opacity-20" />
      </div>

      <div className="max-w-[1340px] mx-auto flex items-center justify-between px-6 relative z-10">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-[56px] w-[150px] object-contain"
              style={{ maxWidth: "150px", maxHeight: "56px" }}
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-montserrat font-medium text-blue-700 mr-7">
          <Link
            to="/"
            className={`relative transition-all duration-300 hover:text-[#7cc6ff] ${
              pathname === "/" ? "text-[#1b4c6d] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#418bbd]" : ""
            }`}
          >
            Home
          </Link>
          <Link

            className={`relative transition-all duration-300 hover:text-[#328dcc] ${
              pathname === "/about-page" ? "text-[#328dcc] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#328dcc]" : ""
            }`}
          >
            About Us
          </Link>
          <Link
           
            className={`relative transition-all duration-300 hover:text-[#328dcc] ${
              pathname === "/project-page" ? "text-[#328dcc] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#328dcc]" : ""
            }`}
          >
            Jobs
          </Link>
          <Link
  
            className={`relative transition-all duration-300 hover:text-[#328dcc] ${
              pathname === "/service-page" ? "text-[#328dcc] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#328dcc]" : ""
            }`}
          >
            Certification
          </Link>
          <Link

            className={`relative transition-all duration-300 hover:text-[#328dcc] ${
              pathname === "/blog-page" ? "text-[#328dcc] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#328dcc]" : ""
            }`}
          >
            Blogs
          </Link>
          <Link
 
            className={`relative transition-all duration-300 hover:text-[#328dcc] ${
              pathname === "/contact-page" ? "text-[#328dcc] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#328dcc]" : ""
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none mr-5">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gradient-to-br from-[#103c65] to-[#328dcc] text-white p-6 absolute top-16 left-0 w-full shadow-lg transform transition-all duration-300 animate-slide-in">
            <ul className="space-y-4 text-sm font-sans font-medium">
              <li>
                <Link
                  to="/"
                  className={`block transition-all duration-300 hover:text-[#328dcc] ${
                    pathname === "/" ? "text-[#328dcc]" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-page"
                  className={`block transition-all duration-300 hover:text-[#328dcc] ${
                    pathname === "/about-page" ? "text-[#328dcc]" : ""
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
           
                  className={`block transition-all duration-300 hover:text-[#328dcc] ${
                    pathname === "/project-page" ? "text-[#328dcc]" : ""
                  }`}
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/service-page"
                  className={`block transition-all duration-300 hover:text-[#328dcc] ${
                    pathname === "/service-page" ? "text-[#328dcc]" : ""
                  }`}
                >
                  Certification
                </Link>
              </li>
              <li>
                <Link
                  to="/blog-page"
                  className={`block transition-all duration-300 hover:text-[#328dcc] ${
                    pathname === "/blog-page" ? "text-[#328dcc]" : ""
                  }`}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-page"
                  className={`block transition-all duration-300 hover:text-[#328dcc] ${
                    pathname === "/contact-page" ? "text-[#328dcc]" : ""
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}