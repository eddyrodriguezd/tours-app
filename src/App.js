
import SliderComponent from './components/public/Slider/SliderComponent';
import Destinations from './views/Destinations';
import FooterPrimary from './views/FooterPrimary';
import NavbarHeader from './views/NavbarHeader';

function App() {
  return (
<>
 
     <NavbarHeader>
     < SliderComponent/>
      <Destinations/>
     </NavbarHeader>
    <FooterPrimary/> 
</>
  );
}




export default App;

