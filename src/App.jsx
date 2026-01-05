import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Project";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="project">
        <Projects />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {/* ✅ FOOTER YAHAN HOGA */}
      <Footer />
    </>
  );
}

export default App;
























// import { Routes, Route } from "react-router-dom";
// // import Home from "./pages/Home";
// import Home from "./pages/Home";
// // import About from "./pages/about";
// import About from "./pages/About";
// import Project from "./pages/Project";
// import Education from "./pages/Education";
// import Contact from "./pages/Contact";
// import Skills from "./pages/Skills";
// import Experience from "./pages/experience";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//     <Header />
//       {/* Routing */}
//       <Routes>
//         {/* <Route path="/" element={<Home />} /> */}
//         <Route path="/" element={ <Home/>} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/project" element={<Project />} />
//         <Route path="/education" element={<Education />} />
//         <Route path="/experience" element={<Experience />} />
//         <Route path="/skills" element={<Skills />} />
//       </Routes>
//       <Footer />
//     </>
//   )
// }

// export default App




