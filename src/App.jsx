import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import store from './store';
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
import NotExist from './pages/notExist/NotExist';
import Editor from './components/editor/Editor';
import ConfirmEmail from './components/confirm-email/ConfirmEmail';
import './App.css';
import ListTours from './components/tours/ListTours';
import Profile from './components/profile/Profile';

const App = () => {
	const { isAuthenticated } = useSelector((state) => state);

	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

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
					</Route>
					<Route path='/confirmacion/:tk' element={<ConfirmEmail />} />
					<Route path='/editor' element={<Editor />} />
					<Route path='/login' element={<Login />} />
					<Route path='/registro' element={<Register />} />
					<Route path='*' element={<NotExist />} />

					{isAuthenticated && (
						<Route path='/dashboard/' element={<Dashboard />}>
							<Route path='tour' element={<RegisterTour />} />
							<Route path='profile' element={<Profile />} />
							<Route path='listTours' element={<ListTours />} />
						</Route>
					)}
				</Routes>
			</ScrollToTop>
		</BrowserRouter>
	);
};
export default App;
