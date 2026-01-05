import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-700 to-purple-900 flex items-center justify-center text-white font-bold text-lg shadow-lg">
            NK
          </div>
          <span className="text-white font-semibold tracking-wide">
            NimraKashif
          </span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {["Home", "About", "Projects", "Education", "Experience", "Skills", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-300 hover:text-white transition group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col bg-black px-6 py-4 gap-4 text-sm">
          {["Home", "About", "Projects", "Education", "Experience", "Skills", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-white transition hover:translate-x-2"
              >
                {item}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;

























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





