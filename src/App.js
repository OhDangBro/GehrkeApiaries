import './App.css';
import Hero from './Components/Hero';
import Honey from './Components/Honey';
import Chapstick from './Components/Chapstick';
import Navi from './Components/Navi';
import Footer from './Components/Footer';
import Bees from './Components/Bees';
import Contact from './Components/Contact';


function App() {
  return (
    <>
    
    <Hero></Hero>
    <div className="bodyDesktop">
    <Honey/>
    {/* <Chapstick/>
    <Bees/> */}
    <Contact/>
    <Footer></Footer>
    <Navi className="navBar"/>
    </div>
   


    </>
  );
}

export default App;
