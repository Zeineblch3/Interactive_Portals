import React from "react";

const Navbar = ({ isInPortal }) => {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 p-4 bg-black bg-opacity-30 text-white z-50 flex justify-between items-center transition-opacity duration-300 ${
        isInPortal ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Logo */}
      <a
        href="https://rispertravel.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Risper Travel website"
      >
        <img
          src="textures/logo.png"
          alt="Risper Travel Logo"
          className="w-40 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
      </a>

      {/* View Catalogue Button */}
      <div className="mr-5">
        <a
          href="https://risper-catalogue.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Risper Travel Catalogue"
        >
          <button
            className="border border-transparent hover:border-white transition-colors duration-200 px-4 py-3 rounded-full text-lg uppercase shrink-0"
          >
            View Catalogue
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
