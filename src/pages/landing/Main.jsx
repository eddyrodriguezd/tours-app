import { BackTop } from 'antd';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Nav from '../../components/header/Nav';
import './Main.css';

const Main = () => (
	<>
		<Nav />
		<Outlet />
		<Footer />
		<BackTop />
	</>
);

export default Main;
