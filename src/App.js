import './App.css';
import Hero from './Components/Hero';
import Navi from './Components/Navi';
import Bees from './Components/Bees';
import Honey from './Components/Honey';
import Chapstick from './Components/Chapstick';
import Eggs from './Components/Eggs';
import Chickens from './Components/Chickens';
import Welcome from './Components/Welcome';


function App() {
  return (
    <div>
    <Hero></Hero>
    <Navi/>
    <Welcome/>
   
    <Bees/>
    <Honey/>
    <Chapstick/>
    <Eggs/>
    <Chickens/>
    </div>
  );
}

export default App;
