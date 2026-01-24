import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Help from "./components/Help/Help";
import Certified from "./components/Certified/Certified";
import Business from "./components/Business/Business";
import Customer from "./components/Customer/Customers";
import Reviews from "./components/Reviews/Reviews";
import Artical from "./components/Artical/Artical";
import Ready from "./components/Ready/Ready";
import Footer from "./components/Footer/Footer"

function App() {
  return (
   <div className="w-full min-h-screen overflow-y-auto overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <Help />
      <Certified />
      <Business/>
      <Customer/>
      <Reviews/>
      <Artical/>
      <Ready />
      <Footer />
    </div>
  );
}

export default App;
