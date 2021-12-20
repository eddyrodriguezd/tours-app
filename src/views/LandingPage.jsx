import SliderComponent from '../components/public/Slider/SliderComponent';
import Destinations from './Destinations';
import FooterPrimary from './FooterPrimary';
import NavbarHeader from './NavbarHeader';
import SliderEnterprise from '../components/public/sliderEnterprise/Slider';

export default function LandingPage() {
	return (
		<>
			<SliderComponent />
			<Destinations />
			<SliderEnterprise />
		</>
	);
}
