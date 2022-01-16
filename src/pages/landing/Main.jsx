/* import Categories from '../../components/categories/Categories';
import Landscape from './components/carrousel/Landscape';
import { categories } from '../../mock/mock';
import Slider from './components/slider/Slider'; */
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Nav from '../../components/header/Nav';

const Main = () => (
	<>
		<Nav />
		{/* <Landscape />
		<Categories categories={categories} />
		<Slider /> */}
		<Outlet />
		<Footer />
	</>
);

export default Main;
