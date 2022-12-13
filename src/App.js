import './App.css';
import Hero from './Components/Hero';
import Honey from './Components/Honey';
import Chapstick from './Components/Chapstick';
import Navi from './Components/Navi';
// import Welcome from './Components/Welcome';


function App() {
  return (
    <>
    <div>
    <Hero></Hero>
    <div className="bodyDesktop">
    <Honey/>
    <Chapstick/>
    </div>
    </div>
    </>
  );
}

export default App;
