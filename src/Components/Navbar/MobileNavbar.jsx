import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    if (!open) {
      setOpen(true);

      gsap.fromTo(
        menuRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.45, ease: "power3.out" }
      );
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.35,
        ease: "power3.in",
        onComplete: () => setOpen(false),
      });
    }
  };

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // WhatsApp CTA
  const msg = "Hey, I want to start this project";
  const phone = "916287636236";
  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

  return (
    <>
      {/* TOP BAR */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 flex items-center justify-between px-5 py-4 sm:hidden">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-emerald-800">
          Opnix
        </h1>

        {/* Hamburger */}
        <button onClick={toggleMenu} className="space-y-1">
          <span className="block w-7 h-0.5 bg-black"></span>
          <span className="block w-7 h-0.5 bg-black"></span>
          <span className="block w-7 h-0.5 bg-black"></span>
        </button>
      </nav>

      {/* SIDE MENU */}
      {open && (
        <div
          ref={menuRef}
          className="fixed top-0 right-0 h-screen w-3/4 bg-white shadow-2xl z-40 flex flex-col pt-28 px-8 space-y-8 text-lg font-medium"
        >
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/services" onClick={toggleMenu}>Services</Link>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 font-semibold"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;