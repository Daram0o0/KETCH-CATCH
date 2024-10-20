import React from "react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="flex justify-between items-center h-40 bg-[#59527A] relative max-w-screen-xl mx-auto">
      <div className="text-white absolute left-5 bottom-5">
        © 2024 Ketch-Catch. All rights reserved.
      </div>
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg text-black hover:bg-gray-200 transition duration-300 absolute right-5 bottom-5 outline-none"
        aria-label="Scroll to top"
      >
        <span className="text-3xl font-black">↑</span>
      </button>
    </footer>
  );
};

export default Footer;
