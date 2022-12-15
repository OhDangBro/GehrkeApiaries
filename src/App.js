import './App.css';
import Hero from './Components/Hero';
import Honey from './Components/Honey';
import Chapstick from './Components/Chapstick';
import Navi from './Components/Navi';
import Footer from './Components/Footer';
import Bees from './Components/Bees';
// import Welcome from './Components/Welcome';


function App() {
  return (
    <>
    <div>
    <Hero></Hero>
    <div className="bodyDesktop">
    <Honey/>
    <Chapstick/>
    <Bees/>
    <Footer></Footer>
    </div>
    </div>

    <Navi className="navBar"/>
    </>
  );
}

export default App;
