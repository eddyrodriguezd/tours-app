import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ScrollToTop from './helpers/ScrollToTop';
import Flyingpoints from './components/tickets';
import { Login, Register } from './components/views/ViewLogin';
import Itinerary from './pages/itinerary/Itinerary';
import Main from './pages/landing/Main';
import Destinations from './pages/destinations/Destinations';
import Body from './pages/landing/components/body/Body';
import Packages from './pages/packages/Packages';
import { loadUser } from './store/actions';
import RegisterTour from './components/tours/RegisterTour';
import Checkout from './pages/checkout/Checkout';
import Dashboard from './pages/dashboard/Dashboard';
import Editor from './components/editor/Editor';
import ConfirmEmail from './components/confirm-email/ConfirmEmail';
import './App.css';
import ListTours from './components/tours/ListTours';
import Hotels from './pages/hotels/Hotels';

const App = () => {
	const dispatch = useDispatch();
	//	const navigate = useNavigate();

	useEffect(() => {
		dispatch(loadUser());
	}, []);
	const { user } = useSelector((state) => state);
	return (
		<BrowserRouter>
			<ScrollToTop>
				<Routes>
					<Route path='/' element={<Main />}>
						<Route path='/' element={<Body />} />
						<Route path='destinos' element={<Destinations />} />
						<Route path='puntorecojo' element={<Flyingpoints />} />
						<Route path='/itinerario/:id' element={<Itinerary />} />
						<Route path='/paquetes' element={<Packages />} />
						<Route path='/checkout' element={<Checkout />} />
						<Route path='/hoteles' element={<Hotels />} />
					</Route>
					<Route path='/confirmacion/:tk' element={<ConfirmEmail />} />
					<Route path='/editor' element={<Editor />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />

					<Route path='*' element={<h2>Página no Encontrada</h2>} />
					<Route
						path='/dashboard/'
						element={!user ? <Navigate to='/' /> : <Dashboard />}>
						<Route path='tour' element={<RegisterTour />} />
						<Route path='listTours' element={<ListTours />} />
					</Route>
				</Routes>
			</ScrollToTop>
		</BrowserRouter>
	);
};
export default App;
