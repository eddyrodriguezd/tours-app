import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Flyingpoints from './pages/tickets';
import { Login, Registrate } from './components/views/ViewLogin';
import Itinerary from './pages/itinerary/Itinerary';
import Footer from './components/footer/Footer';
import Nav from './components/header/Nav';
import Main from './pages/landing/Main';
import Destinations from './pages/destinations/Destinations';

const App = () => (
	<>
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/destinos' element={<Destinations />} />
				<Route path='/login' element={<Login />} />
				<Route path='/registrate' element={<Registrate />} />
				<Route path='/puntorecojo' element={<Flyingpoints />} />
				<Route path='/itinerario' element={<Itinerary />} />
				<Route path='*' element={<h2>Página no Encontrada</h2>} />
			</Routes>
		</BrowserRouter>
		<Footer />
	</>
);

export default App;
