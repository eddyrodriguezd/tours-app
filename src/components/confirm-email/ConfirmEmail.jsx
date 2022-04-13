import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Spin, Button } from 'antd';
import './ConfirmEmail.css';

const ConfirmEmail = () => {
	const { tk } = useParams();
	const [loading, setloading] = useState(true);
	const [response, setresponse] = useState({});
	useEffect(() => {
		axios
			.put(
				`${process.env.REACT_APP_BACKEND_ENDPOINT}users/confirm/${tk}`,
				{}
			)
			.then(
				(resp) => {
					setresponse(resp.data);
				},
				() => {
					setresponse({ message: 'Enlace expirado', success: false });
				}
			)
			.finally(() => {
				setloading(false);
			});
	}, []);
	return (
		<div className='content-message'>
			{loading && <Spin />}
			{!loading && (
				<div className='content-card'>
					<div className='content-card-icon'>
						{response.success && (
							<CheckOutlined style={{ color: '#005acf', fontSize: 70 }} />
						)}
						{!response.success && (
							<CloseOutlined style={{ color: '#c20d00', fontSize: 70 }} />
						)}
					</div>
					<p>
						{response.message} <br /> El enlace que has seguido se ha
						caducado
					</p>
					<div className='content-card-btn'>
						<Button>
							<Link to='/'>Ir a Inicio</Link>
						</Button>
						<Button type='primary'>
							{response.success ? (
								<Link to='/login'>Login</Link>
							) : (
								<Link to='/registro'>Intentalo de Nuevo</Link>
							)}
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default ConfirmEmail;
