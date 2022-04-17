import React from 'react';
import { Modal, Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const ModalCheckout = ({
	isModalVisible,
	setIsModalVisible,
	state,
	id,
}) => {
	const navigate = useNavigate();
	const handleOk = () => {
		navigate('/login', { state: { tour: state, id } });
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<Modal
			title='Iniciar sesión'
			visible={isModalVisible}
			onCancel={handleCancel}
			footer={[
				<Button type='primary' onClick={handleCancel}>
					Cancelar
				</Button>,
				<Button type='primary' onClick={handleOk}>
					Ok
				</Button>,
			]}>
			<Result
				status='warning'
				title='Para poder realizar esta operación, debes iniciar sesión.'
			/>
		</Modal>
	);
};

export default ModalCheckout;
