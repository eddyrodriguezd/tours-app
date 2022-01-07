import NavChildren from '../public/Header/NavChildren';

const NavbarHeader = ({ children }) => (
	<>
		<NavChildren />
		{children}
	</>
);

export default NavbarHeader;
