import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Flyingpoints from './pages/tickets';
import { Login, Registrate } from './components/views/ViewLogin';
import Itinerary from './pages/itinerary/Itinerary';
import Main from './pages/landing/Main';
import Destinations from './pages/destinations/Destinations';
import Body from './pages/landing/components/body/Body';
import Packages from './pages/packages/Packages';
import LogoutBusines from './pages/login/components/registerBusiness';
import RegisterTour from './components/tours/RegisterTour';

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Main />}>
				<Route path='/' element={<Body />} />
				<Route path='destinos' element={<Destinations />} />
				<Route path='puntorecojo' element={<Flyingpoints />} />
				<Route path='itinerario/:id' element={<Itinerary />} />
				<Route path='/paquetes' element={<Packages />} />
			</Route>

			<Route path='/tour' element={<RegisterTour />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Registrate />} />
			<Route path='/registerBusines' element={<LogoutBusines />} />
			<Route path='*' element={<h2>Página no Encontrada</h2>} />
		</Routes>
	</BrowserRouter>
);

export default App;
