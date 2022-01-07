import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Destinations from './components/views/Destinations';
import FooterPrimary from './components/views/FooterPrimary';
import NavbarHeader from './components/views/NavbarHeader';
import Flyingpoints from './components/views/Flyingpoints';
import Itinerary from './components/views/Itinerary';
import LandingPage from './components/views/LandingPage';

const App = () => (
	<>
		<BrowserRouter>
			<NavbarHeader />
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/destinos' element={<Destinations />} />
				<Route path='/puntorecojo' element={<Flyingpoints />} />
				<Route path='/itinerario' element={<Itinerary />} />
				<Route path='*' element={<h2>Página no Encontrada</h2>} />
			</Routes>
		</BrowserRouter>
		<FooterPrimary />
	</>
);

export default App;
