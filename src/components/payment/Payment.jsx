/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Payment = ({ info }) => {
	// eslint-disable-next-line no-undef
	const mp = new MercadoPago(process.env.REACT_APP_MERCADO_TOKEN, {
		locale: 'es-PE',
	});
	const navigate = useNavigate();

	const [card, setCard] = useState({
		cvc: '',
		expiry: '',
		focus: '',
		name: '',
		number: '',
	});

	const handleInputFocus = (e) => {
		setCard({ ...card, focus: e.target.name });
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setCard({ ...card, [name]: value });
	};

	useEffect(() => {
		try {
			const total = info.hotel.price.amount;
			const cardForm = mp.cardForm({
				amount: total.toString(),
				autoMount: true,
				form: {
					id: 'form-checkout',
					cardholderName: {
						id: 'form-checkout__cardholderName',
						placeholder: 'Titular de la tarjeta',
					},
					cardholderEmail: {
						id: 'form-checkout__cardholderEmail',
						placeholder: 'E-mail',
					},
					cardNumber: {
						id: 'form-checkout__cardNumber',
						placeholder: 'Número de la tarjeta',
					},
					cardExpirationDate: {
						id: 'form-checkout__cardExpirationDate',
						placeholder: 'Data de vencimiento (MM/YYYY)',
					},
					securityCode: {
						id: 'form-checkout__securityCode',
						placeholder: 'Código de seguridad',
					},
					installments: {
						id: 'form-checkout__installments',
						placeholder: 'Cuotas',
					},
					identificationType: {
						id: 'form-checkout__identificationType',
						placeholder: 'Tipo de documento',
					},
					identificationNumber: {
						id: 'form-checkout__identificationNumber',
						placeholder: 'Número de documento',
					},
					issuer: {
						id: 'form-checkout__issuer',
						placeholder: 'Banco emisor',
					},
				},
				callbacks: {
					onFormMounted: (error) => {
						if (error)
							return console.warn('Form Mounted handling error: ', error);
						return console.log('todo ok');
					},
					onSubmit: (event) => {
						event.preventDefault();
						console.log(cardForm.getCardFormData());
						// Swal.showLoading();
						const {
							// eslint-disable-next-line camelcase
							paymentMethodId: payment_method_id,
							// eslint-disable-next-line camelcase
							issuerId: issuer_id,
							cardholderEmail: email,
							amount,
							token,
							installments,
							identificationNumber,
							identificationType,
						} = cardForm.getCardFormData();

						axios
							.post(
								`${process.env.REACT_APP_BACKEND_ENDPOINT}reservation/create`,
								{
									token,
									issuer_id,
									payment_method_id,
									transaction_amount: Number(amount),
									installments: Number(installments),
									description: 'Descripción del producto',
									payer: {
										email,
										identification: {
											type: identificationType,
											number: identificationNumber,
										},
									},
									info,
								},
								{
									headers: {
										'Content-Type': 'application/json',
									},
									withCredentials: true,
								}
							)
							.then(
								(response) => {
									const msg = response.status || response.error;
									message.info('Reservación exitosa');
									navigate('/');
									console.log(msg);
								},
								(err) => console.log(err.error)
							);
					},
					onFetching: (resource) => {
						console.log('Fetching resource: ', resource);
					},
				},
			});
		} catch (error) {
			console.log(error);
		}
	}, []);

	const [form] = Form.useForm();
	return (
		<Form form={form} id='form-checkout'>
			<Input.Group size='large'>
				<Row gutter={8}>
					<Col span={12}>
						<select
							name='identificationType'
							id='form-checkout__identificationType'
						/>
					</Col>
					<Col span={12}>
						<Form.Item>
							<Input
								name='identificationNumber'
								id='form-checkout__identificationNumber'
							/>
						</Form.Item>
					</Col>
				</Row>
			</Input.Group>
			<Input.Group size='large'>
				<Row gutter={8}>
					<Col span={12}>
						<Form.Item
							label='Card Number'
							rules={[
								{ required: true, message: 'Please input your username!' },
							]}>
							<Input
								name='number'
								placeholder='0000000000'
								id='form-checkout__cardNumber'
								onChange={handleInputChange}
								onFocus={handleInputFocus}
							/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							label='Full Name'
							rules={[
								{ required: true, message: 'Please input your username!' },
							]}>
							<Input
								id='form-checkout__cardholderName'
								placeholder='Pepe Lotaso'
								name='name'
								onChange={handleInputChange}
								onFocus={handleInputFocus}
							/>
						</Form.Item>
					</Col>
				</Row>
			</Input.Group>
			<Input.Group size='large'>
				<Row gutter={8}>
					<Col span={12}>
						<Form.Item label='Card Expiration Date'>
							<input
								type='text'
								name='expiry'
								placeholder='10/10'
								id='form-checkout__cardExpirationDate'
								onChange={handleInputChange}
								onFocus={handleInputFocus}
							/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							label='cvc'
							rules={[
								{ required: true, message: 'Please input your cvc!' },
							]}>
							<Input
								placeholder='123'
								name='cvc'
								id='form-checkout__securityCode'
								onChange={handleInputChange}
								onFocus={handleInputFocus}
							/>
						</Form.Item>
					</Col>
				</Row>
			</Input.Group>
			<Input.Group size='large'>
				<Row gutter={8}>
					<Col span={24}>
						<Form.Item
							label='Email'
							rules={[
								{ required: true, message: 'Please input your email!' },
							]}>
							<Input
								placeholder='0000000000'
								id='form-checkout__cardholderEmail'
							/>
						</Form.Item>
					</Col>
				</Row>
			</Input.Group>

			<select
				name='issuer'
				id='form-checkout__issuer'
				style={{ display: 'none' }}
			/>

			<Input.Group size='large'>
				<Row gutter={8}>
					<Col span={24}>
						<Form.Item>
							<select
								name='installments'
								id='form-checkout__installments'
							/>
						</Form.Item>
					</Col>
				</Row>
			</Input.Group>
			<Button type='primary' htmlType='submit'>
				Submit
			</Button>
		</Form>

		/* <form id='form-checkout'>
			<input type='text' name='cardNumber' id='form-checkout__cardNumber' />
			<input
				type='text'
				name='cardExpirationDate'
				id='form-checkout__cardExpirationDate'
			/>
			<input
				type='text'
				name='cardholderName'
				id='form-checkout__cardholderName'
			/>
			<input
				type='email'
				name='cardholderEmail'
				id='form-checkout__cardholderEmail'
			/>
			<input
				type='text'
				name='securityCode'
				id='form-checkout__securityCode'
			/>
			<select name='issuer' id='form-checkout__issuer' />
			<select
				name='identificationType'
				id='form-checkout__identificationType'
			/>
			<input
				type='text'
				name='identificationNumber'
				id='form-checkout__identificationNumber'
			/>
			<select name='installments' id='form-checkout__installments' />
			<button type='submit' id='form-checkout__submit'>
				Pagar
			</button>
		</form> */
	);
};
export default Payment;
