import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const ConfirmEmail = () => {
	const { tk } = useParams();
	const [loading, setloading] = useState(true);
	const [response, setresponse] = useState({});
	useEffect(() => {
		axios
			.put(`${process.env.REACT_APP_BACKEND_ENDPOINT}confirm/${tk}`, {})
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
		<div>
			{loading && <Spin />}
			{!loading && (
				<div>
					<div>
						{response.success && <CheckOutlined twoToneColor='#86DC3D' />}
						{!response.success && <CloseOutlined twoToneColor='#86DC3D' />}
					</div>
					<div>
						<p>{response.message}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default ConfirmEmail;
