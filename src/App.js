import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
// import About from "./pages/about/About";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      {/* <About/> */}
      <Footer/>
    </div>
  );
}

export default App;
