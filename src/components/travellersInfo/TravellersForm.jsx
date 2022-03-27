import { useState } from 'react';
import {
	Form,
	Input,
	Select,
	DatePicker,
	InputNumber,
	Row,
	Col,
} from 'antd';
import moment from 'moment';

const { Option } = Select;
const dateFormat = 'YYYY-MM-DD';

const TravellersForm = ({ inputs, addMemberInfo, onChangeFn }) => {
	const [travellersQty, setTravellersQty] = useState(1);

	const onTravellersQtyChange = (quantity) => {
		setTravellersQty(quantity);
		onChangeFn('membersSize', quantity);
	};

	return (
		<Form layout='horizontal' size='default'>
			<Row>
				<Col xs={6} sm={7} md={8} lg={9} xl={10}>
					<h2>Datos del viaje</h2>

					<Row>
						<Col span={12}>
							<Form.Item label='Cantidad de pasajeros'>
								<InputNumber
									name='tourId'
									min={1}
									max={10}
									defaultValue={1}
									onChange={onTravellersQtyChange}
								/>
							</Form.Item>
						</Col>

						<Col span={12}>
							<Form.Item label='Fecha de salida'>
								<DatePicker
									defaultValue={moment(new Date(), dateFormat)}
									format={dateFormat}
									onChange={(e) =>
										onChangeFn('startDate', e.format(dateFormat).toString())
									}
								/>
							</Form.Item>
						</Col>
					</Row>

					<h2>Datos de contacto</h2>

					<Form.Item label='Email'>
						<Input
							onChange={(e) =>
								onChangeFn('contactInfo', {
									...inputs.contactInfo,
									email: e.target.value,
								})
							}
						/>
					</Form.Item>
					<Form.Item label='Teléfono'>
						<Input
							onChange={(e) =>
								onChangeFn('contactInfo', {
									...inputs.contactInfo,
									phoneNumber: e.target.value,
								})
							}
						/>
					</Form.Item>
				</Col>

				<Col xs={18} sm={17} md={16} lg={15} xl={14}>
					<h2>Datos de los pasajeros</h2>

					{[...Array(travellersQty)].map((value, index) => (
						<div>
							<h3>Pasajero {index + 1}</h3>

							<Row>
								<Col span={12}>
									<Form.Item label='Nombre(s)'>
										<Input
											onChange={(e) =>
												addMemberInfo('name', index, e.target.value)
											}
										/>
									</Form.Item>
								</Col>

								<Col span={12}>
									<Form.Item label='Apellido(s)'>
										<Input
											onChange={(e) =>
												addMemberInfo('lastName', index, e.target.value)
											}
										/>
									</Form.Item>
								</Col>
							</Row>

							<Row>
								<Col span={6}>
									<Form.Item label='Tipo de documento'>
										<Select
											defaultValue='DNI'
											style={{ width: '6rem' }}
											onChange={(targetValue) =>
												addMemberInfo('idType', index, targetValue)
											}>
											<Option value='DNI'>DNI</Option>
											<Option value='CE'>CE</Option>
											<Option value='Pasaporte'>Pasaporte</Option>
										</Select>
									</Form.Item>
								</Col>

								<Col span={18}>
									<Form.Item label='Número de documento'>
										<Input
											onChange={(e) =>
												addMemberInfo('idNumber', index, e.target.value)
											}
										/>
									</Form.Item>
								</Col>
							</Row>
						</div>
					))}
				</Col>
			</Row>
		</Form>
	);
};

export default TravellersForm;
