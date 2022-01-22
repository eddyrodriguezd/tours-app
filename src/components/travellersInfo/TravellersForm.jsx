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
const dateFormat = 'DD/MM/YYYY';

const TravellersForm = () => {
	const [travellersQty, setTravellersQty] = useState(1);

	const onTravellersQtyChange = (quantity) => {
		setTravellersQty(quantity);
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
								/>
							</Form.Item>
						</Col>
					</Row>

					<h2>Datos de contacto</h2>

					<Form.Item label='Email'>
						<Input />
					</Form.Item>
					<Form.Item label='Teléfono'>
						<Input />
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
										<Input />
									</Form.Item>
								</Col>

								<Col span={12}>
									<Form.Item label='Apellido(s)'>
										<Input />
									</Form.Item>
								</Col>
							</Row>

							<Row>
								<Col span={6}>
									<Form.Item label='Tipo de documento'>
										<Select defaultValue='DNI' style={{ width: '6rem' }}>
											<Option value='DNI'>DNI</Option>
											<Option value='CE'>CE</Option>
											<Option value='Pasaporte'>Pasaporte</Option>
										</Select>
									</Form.Item>
								</Col>

								<Col span={18}>
									<Form.Item label='Número de documento'>
										<Input />
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
