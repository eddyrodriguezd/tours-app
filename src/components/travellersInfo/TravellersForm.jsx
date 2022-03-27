import { useState } from 'react';
import { Form, Input, Select, DatePicker, InputNumber } from 'antd';
import moment from 'moment';

const { Option } = Select;
const dateFormat = 'YYYY-MM-DD';

const TravellersForm = ({ members, addMemberInfo, onChangeFn }) => {
	const [travellersQty, setTravellersQty] = useState(1);

	const onTravellersQtyChange = (quantity) => {
		setTravellersQty(quantity);
		onChangeFn('membersSize', quantity);
	};

	const [idNumberStatusArr, setIdNumberStatusArr] = useState([{}]);

	const updateIdNumberStatus = (index, valueToSet) => {
		console.log(
			'updating number status from:',
			idNumberStatusArr,
			'value to set',
			valueToSet
		);
		idNumberStatusArr.map(() => {
			setIdNumberStatusArr([
				...idNumberStatusArr.slice(0, index),
				valueToSet,
				...idNumberStatusArr.slice(index + 1),
			]);
			return idNumberStatusArr;
		});
	};

	const addMemberInfoAndValidateIdNumber = (index, value) => {
		addMemberInfo('idNumber', index, value);
		console.log('value', value);

		if (Number.isNaN(Number(value))) {
			updateIdNumberStatus(index, {
				validateStatus: 'error',
				errorMsg: 'El número de '
					.concat(members[index].idType)
					.concat(' solo puede contener dígitos'),
			});
			return;
		}

		if (value.length !== 9 && members[index]?.idType === 'Pasaporte') {
			updateIdNumberStatus(index, {
				validateStatus: 'error',
				errorMsg: 'El número de Pasaporte debe contar con 9 dígitos',
			});
			return;
		}

		if (
			value.length !== 8 &&
			(members[index]?.idType === 'CE' || members[index]?.idType === 'DNI')
		) {
			updateIdNumberStatus(index, {
				validateStatus: 'error',
				errorMsg: 'El número de '
					.concat(members[index].idType)
					.concat(' debe contar con 8 dígitos'),
			});
			return;
		}

		updateIdNumberStatus(index, {
			validateStatus: 'success',
			errorMsg: '',
		});
	};

	const addMemberInfoAndValidateIdType = (index, value) => {
		addMemberInfo('idType', index, value);

		if (Number.isNaN(Number(members[index]?.idNumber))) {
			updateIdNumberStatus(index, {
				validateStatus: 'error',
				errorMsg: 'El '
					.concat(value)
					.concat(' solo puede contener dígitos'),
			});
			return;
		}

		if (members[index]?.idNumber !== 9 && value === 'Pasaporte') {
			updateIdNumberStatus(index, {
				validateStatus: 'error',
				errorMsg: 'El número de Pasaporte debe contar con 9 dígitos',
			});
			return;
		}

		if (
			members[index]?.idNumber !== 8 &&
			(value === 'CE' || value === 'DNI')
		) {
			updateIdNumberStatus(index, {
				validateStatus: 'error',
				errorMsg: 'El número de '
					.concat(value)
					.concat(' debe contar con 8 dígitos'),
			});
			return;
		}

		updateIdNumberStatus(index, {
			validateStatus: 'success',
			errorMsg: '',
		});
	};

	return (
		<Form
			labelCol={{ span: 10 }}
			wrapperCol={{ span: 6 }}
			layout='horizontal'
			initialValues={{ size: 'default' }}
			size='default'>
			<h2>Datos del viaje</h2>

			<Form.Item label='Cantidad de pasajeros'>
				<InputNumber
					name='tourId'
					min={1}
					max={10}
					defaultValue={1}
					onChange={onTravellersQtyChange}
				/>
			</Form.Item>

			<Form.Item label='Fecha de salida'>
				<DatePicker
					defaultValue={moment(new Date(), dateFormat)}
					format={dateFormat}
					onChange={(e) =>
						onChangeFn('startDate', e.format(dateFormat).toString())
					}
				/>
			</Form.Item>

			<h2>Datos de los pasajeros</h2>

			{[...Array(travellersQty)].map((value, index) => (
				<div>
					<h3>Pasajero {index + 1}</h3>

					<Form.Item label='Nombre(s)'>
						<Input
							onChange={(e) => addMemberInfo('name', index, e.target.value)}
						/>
					</Form.Item>

					<Form.Item label='Apellido(s)'>
						<Input
							onChange={(e) =>
								addMemberInfo('lastName', index, e.target.value)
							}
						/>
					</Form.Item>

					<Form.Item label='Tipo de documento'>
						<Select
							defaultValue='DNI'
							style={{ width: '6rem' }}
							onChange={(targetValue) =>
								addMemberInfoAndValidateIdType(index, targetValue)
							}>
							<Option value='DNI'>DNI</Option>
							<Option value='CE'>CE</Option>
							<Option value='Pasaporte'>Pasaporte</Option>
						</Select>
					</Form.Item>

					<Form.Item
						label='Número de documento'
						hasFeedback
						validateStatus={idNumberStatusArr[index]?.validateStatus}
						help={idNumberStatusArr[index]?.errorMsg}>
						<Input
							onChange={(e) =>
								addMemberInfoAndValidateIdNumber(index, e.target.value)
							}
						/>
					</Form.Item>
				</div>
			))}
		</Form>
	);
};

export default TravellersForm;
