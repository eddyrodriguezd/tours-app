import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Destinations from './views/Destinations';
import FooterPrimary from './views/FooterPrimary';
import NavbarHeader from './views/NavbarHeader';
import Flyingpoints from './views/Flyingpoints';
import Itinerary from './views/Itinerary';
import LandingPage from './views/LandingPage';

const App = function () {
	return (
		<>
			<NavbarHeader />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/destinos' element={<Destinations />} />
					<Route path='/puntorecojo' element={<Flyingpoints />} />
					<Route path='/detalles' element={<Itinerary />} />
					<Route path='*' element={<h2>Página no Encontrada</h2>} />
				</Routes>
			</BrowserRouter>
			<FooterPrimary />
		</>
	);
};

export default App;
