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











// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     section?.scrollIntoView({ behavior: "smooth" });
//     setOpen(false);
//   };

//   const menuItems = [
//     "home",
//     "about",
//     "collection",
//     "gallery",
//     "occasions",
//     "services",
//     "contact",
//   ];

//   return (
//     <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

//         {/* LOGO */}
//         <h1
//           onClick={() => scrollToSection("home")}
//           className="text-3xl font-bold cursor-pointer tracking-wide
//                      bg-gradient-to-r from-[#d4af37] to-[#f5d76e]
//                      bg-clip-text text-transparent"
//         >
//           RoséGems
//         </h1>

//         {/* DESKTOP MENU */}
//         <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
//           {menuItems.map((item) => (
//             <li
//               key={item}
//               onClick={() => scrollToSection(item)}
//               className="cursor-pointer relative group capitalize"
//             >
//               <span className="group-hover:text-[#d4af37] transition">
//                 {item}
//               </span>
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#d4af37] group-hover:w-full transition-all duration-300"></span>
//             </li>
//           ))}
//         </ul>

//         {/* TOGGLE BUTTON */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-[#d4af37]"
//         >
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       {open && (
//         <div className="md:hidden bg-black border-t border-gray-800">
//           <ul className="flex flex-col text-center py-6 gap-6 text-gray-300">
//             {menuItems.map((item) => (
//               <li
//                 key={item}
//                 onClick={() => scrollToSection(item)}
//                 className="cursor-pointer capitalize text-lg hover:text-[#d4af37] transition"
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// }





// import React from "react";

// export default function Header() {
//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     section?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <header className="fixed top-0 w-full bg-white shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

//         {/* LOGO */}
//         <h1 className="text-2xl font-bold text-pink-500 cursor-pointer"
//             onClick={() => scrollToSection("home")}
//         >
//           RoséGems
//         </h1>

//         {/* MENU */}
//         <ul className="flex gap-6 text-gray-700 font-medium">
//           <li onClick={() => scrollToSection("home")} className="cursor-pointer hover:text-pink-500">
//             Home
//           </li>
//           <li onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-pink-500">
//             About
//           </li>
//           <li onClick={() => scrollToSection("collection")} className="cursor-pointer hover:text-pink-500">
//             Collection
//           </li>
//           <li onClick={() => scrollToSection("gallery")} className="cursor-pointer hover:text-pink-500">
//             Gallery
//           </li>
//           <li onClick={() => scrollToSection("occasions")} className="cursor-pointer hover:text-pink-500">
//             Occasions
//           </li>
//           <li onClick={() => scrollToSection("service")} className="cursor-pointer hover:text-pink-500">
//             Services
//           </li>
//           <li onClick={() => scrollToSection("contact")} className="cursor-pointer hover:text-pink-500">
//             Contact
//           </li>
//         </ul>

//       </div>
//     </header>
//   );
// }



























// import { useState } from "react";


// function Header() {
//   const [open, setOpen] = useState(false); // toggle state

//   return (
//     <header className="bg-black text-white shadow-md fixed top-0 w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

//         {/* Logo */}
//         <h1 className="text-xl font-bold tracking-wide animate-bounce">
//           NimraKashif
//         </h1>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex gap-6">
//           <a href="#home" className="hover:text-purple-500">Home</a>
//           <a href="#about" className="hover:text-purple-500">About</a>
//           <a href="#project" className="hover:text-purple-500">Projects</a>
//           <a href="#education" className="hover:text-purple-500">Education</a>
//           <a href="#experience" className="hover:text-purple-500">Experience</a>
//           <a href="#skills" className="hover:text-purple-500">Skills</a>
//           <a href="#contact" className="hover:text-purple-500">Contact</a>
//         </nav>


//         {/* Toggle Button */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-2xl focus:outline-none"
//         >
//           {open ? "✖" : "☰"}
//         </button>
//       </div>

//       {/*  Menu */}
      
//         { open && (
//           <nav className="md:hidden bg-black px-4 pb-4 flex flex-col gap-3 text-lg">
//             <a onClick={() => setOpen(false)} href="#home" className="hover:text-purple-500">Home</a>
//             <a onClick={() => setOpen(false)} href="#about" className="hover:text-purple-500">About</a>
//             <a onClick={() => setOpen(false)} href="#project" className="hover:text-purple-500">Projects</a>
//             <a onClick={() => setOpen(false)} href="#education" className="hover:text-purple-500">Education</a>
//             <a onClick={() => setOpen(false)} href="#experience" className="hover:text-purple-500">Experience</a>
//             <a onClick={() => setOpen(false)} href="#skills" className="hover:text-purple-500">Skills</a>
//             <a onClick={() => setOpen(false)} href="#contact" className="hover:text-purple-500">Contact</a>
//           </nav>
//         )}

      
//     </header>
//   );
// }

// export default Header;





