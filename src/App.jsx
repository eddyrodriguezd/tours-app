import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Flyingpoints from './pages/tickets';
import { Login, Registrate } from './components/views/ViewLogin';
import Itinerary from './pages/itinerary/Itinerary';
import Main from './pages/landing/Main';
import Destinations from './pages/destinations/Destinations';
import Body from './pages/landing/components/body/Body';

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Main />}>
				<Route path='/' element={<Body />} />
				<Route path='destinos' element={<Destinations />} />
				<Route path='puntorecojo' element={<Flyingpoints />} />
				<Route path='itinerario' element={<Itinerary />} />
			</Route>
			<Route path='/login' element={<Login />} />
			<Route path='/registrate' element={<Registrate />} />
			<Route path='*' element={<h2>Página no Encontrada</h2>} />
		</Routes>
	</BrowserRouter>
);

export default App;
