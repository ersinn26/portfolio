import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
// import About from "./pages/about/About";
// import Projects from "./pages/projects/Projects";
// import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      {/* <About/> */}
      {/* <Projects/> */}
      {/* <Contact/> */}
      <Footer/>
    </div>
  );
}

export default App;
