import Categories from '../../components/categories/Categories';
import Landscape from './components/carrousel/Landscape';
import { categories } from '../../mock/mock';
import Slider from './components/slider/Slider';

const Main = () => (
	<>
		<Landscape />
		<Categories categories={categories} />
		<Slider />
	</>
);

export default Main;
