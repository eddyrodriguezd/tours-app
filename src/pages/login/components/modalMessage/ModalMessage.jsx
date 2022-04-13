import { Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../../store/actions';

const ModalMessage = ({ bolAux, email, setBolAux }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleOk = () => {
		dispatch(logout());
		navigate('/');
	};
	const handleCancel = () => {
		dispatch(logout());
		setBolAux(false);
	};
	return (
		<Modal
			title='Message Modal'
			visible={bolAux}
			onOk={handleOk}
			onCancel={handleCancel}
			afterClose={handleCancel}>
			<h3>¡LISTO! Revisa tu correo. </h3>
			<p>
				Revise tu buzón de correo sigue las intrucciones enviadas.
				<br />
				Si no lo encuentras, revisa la carpeta de spam.
				<br />
				El correo fue enviado a: {email}
			</p>
		</Modal>
	);
};

export default ModalMessage;
