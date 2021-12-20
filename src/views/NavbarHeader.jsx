import NavChildren from '../components/public/Header/NavChildren';

export default function NavbarHeader(props) {
	return (
		<>
			<NavChildren />
			{props.children}
		</>
	);
}
