import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Destinations from './components/views/Destinations';
import FooterPrimary from './components/views/FooterPrimary';
import NavbarHeader from './components/views/NavbarHeader';
import Flyingpoints from './components/views/Flyingpoints';
import Itinerary from './components/views/Itinerary';
import LandingPage from './components/views/LandingPage';
import AdminPanel from './components/views/admin/AdminPanel';
import { Login, Registrate } from './components/views/ViewLogin';

const App = () => (
	<>
		<BrowserRouter>
			<NavbarHeader />
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/destinos' element={<Destinations />} />
				<Route path='/login' element={<Login />} />
				<Route path='/registrate' element={<Registrate />} />
				<Route path='/puntorecojo' element={<Flyingpoints />} />
				<Route path='/itinerario' element={<Itinerary />} />
				<Route path='/admin' element={<AdminPanel />} />
				<Route path='*' element={<h2>Página no Encontrada</h2>} />
			</Routes>
		</BrowserRouter>
		<FooterPrimary />
	</>
);

export default App;
