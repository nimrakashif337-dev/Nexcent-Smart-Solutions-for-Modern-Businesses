






import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/services" },
    { name: "Feature", path: "/feature" },
    { name: "Product", path: "/product" },
    { name: "Testimonial", path: "/testimonial" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#F5F7FA] border-b">
      <div className="max-w-[1440px] h-[84px] mx-auto px-20 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-8" />
          <span className="font-bold text-xl text-gray-800">Nexcent</span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="hover:text-green-600 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* AUTH BUTTONS */}
        <div className="hidden md:flex gap-4">
          <button className="text-green-600 font-medium">Login</button>
          <button className="bg-green-600 text-white px-5 py-2 rounded">
            Sign up
          </button>
        </div>

        {/* MOBILE MENU BTN */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block text-gray-700"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}











