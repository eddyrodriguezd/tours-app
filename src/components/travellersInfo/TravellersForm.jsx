import { useState, useEffect } from 'react';
import { Form, Input, Select, DatePicker, InputNumber } from 'antd';
import moment from 'moment';

const { Option } = Select;
const dateFormat = 'YYYY-MM-DD';

const TravellersForm = ({
	inputs,
	addMemberInfo,
	onChangeFn,
	setFormCompleted,
}) => {
	const { members } = inputs;

	const [nameStatusArr, setNameStatusArr] = useState([{}]);
	const [lastNameStatusArr, setLastNameStatusArr] = useState([{}]);
	const [idNumberStatusArr, setIdNumberStatusArr] = useState([{}]);

	useEffect(() => {
		const statusArr = [
			...nameStatusArr,
			...lastNameStatusArr,
			...idNumberStatusArr,
		];
		const successfulItems = statusArr.filter(
			(status) => status.validateStatus === 'success'
		).length;

		setFormCompleted(successfulItems === statusArr.length);
	}, [nameStatusArr, lastNameStatusArr, idNumberStatusArr]);

	const updateStatusArr = (arr, fun, index, valueToSet) => {
		arr.map(() => {
			fun([...arr.slice(0, index), valueToSet, ...arr.slice(index + 1)]);
			return arr;
		});
	};

	const addMemberInfoAndValidateNotEmpty = (key, index, value) => {
		addMemberInfo(key, index, value);

		switch (key) {
			case 'name':
				if (value === '') {
					updateStatusArr(nameStatusArr, setNameStatusArr, index, {
						validateStatus: 'error',
						errorMsg: 'Por favor ingrese su(s) nombre(s)',
					});
					return;
				}
				updateStatusArr(nameStatusArr, setNameStatusArr, index, {
					validateStatus: 'success',
					errorMsg: '',
				});
				break;
			case 'lastName':
				if (value === '') {
					updateStatusArr(lastNameStatusArr, setLastNameStatusArr, index, {
						validateStatus: 'error',
						errorMsg: 'Por favor ingrese su(s) apellido(s)',
					});
					return;
				}
				updateStatusArr(lastNameStatusArr, setLastNameStatusArr, index, {
					validateStatus: 'success',
					errorMsg: '',
				});
				break;
			default:
		}
	};

	const addMemberInfoAndValidateIdNumber = (index, value) => {
		addMemberInfo('idNumber', index, value);

		if (Number.isNaN(Number(value))) {
			updateStatusArr(idNumberStatusArr, setIdNumberStatusArr, index, {
				validateStatus: 'error',
				errorMsg: 'El número de '
					.concat(members[index].idType)
					.concat(' solo puede contener dígitos'),
			});
			return;
		}

		if (value.length !== 9 && members[index]?.idType === 'Pasaporte') {
			updateStatusArr(idNumberStatusArr, setIdNumberStatusArr, index, {
				validateStatus: 'error',
				errorMsg: 'El número de Pasaporte debe contar con 9 dígitos',
			});
			return;
		}

		if (
			value.length !== 8 &&
			(members[index]?.idType === 'CE' || members[index]?.idType === 'DNI')
		) {
			updateStatusArr(idNumberStatusArr, setIdNumberStatusArr, index, {
				validateStatus: 'error',
				errorMsg: 'El número de '
					.concat(members[index].idType)
					.concat(' debe contar con 8 dígitos'),
			});
			return;
		}

		updateStatusArr(idNumberStatusArr, setIdNumberStatusArr, index, {
			validateStatus: 'success',
			errorMsg: '',
		});
	};

	const addMemberInfoAndValidateIdType = (index, value) => {
		addMemberInfo('idType', index, value);

		if (Number.isNaN(Number(members[index]?.idNumber))) {
			updateStatusArr(idNumberStatusArr, setIdNumberStatusArr, index, {
				validateStatus: 'error',
				errorMsg: 'El '
					.concat(value)
					.concat(' solo puede contener dígitos'),
			});
			return;
		}

		if (members[index]?.idNumber !== 9 && value === 'Pasaporte') {
			updateStatusArr(idNumberStatusArr, setIdNumberStatusArr, index, {
				validateStatus: 'error',
				errorMsg: 'El número de Pasaporte debe contar con 9 dígitos',
			});
			return;
		}

		if (
			members[index]?.idNumber !== 8 &&
			(value === 'CE' || value === 'DNI')
		) {
			updateStatusArr(idNumberStatusArr, setIdNumberStatusArr, index, {
				validateStatus: 'error',
				errorMsg: 'El número de '
					.concat(value)
					.concat(' debe contar con 8 dígitos'),
			});
			return;
		}

		updateStatusArr(idNumberStatusArr, setIdNumberStatusArr, index, {
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
					defaultValue={
						inputs.membersSize === undefined ? 1 : inputs.membersSize
					}
					onChange={(value) => onChangeFn('membersSize', value)}
				/>
			</Form.Item>

			<Form.Item label='Fecha de salida'>
				<DatePicker
					defaultValue={
						inputs.startDate === undefined
							? moment(new Date(), dateFormat)
							: moment(new Date(inputs.startDate), dateFormat)
					}
					format={dateFormat}
					onChange={(e) =>
						onChangeFn('startDate', e.format(dateFormat).toString())
					}
				/>
			</Form.Item>

			<h2>Datos de los pasajeros</h2>

			{[...Array(inputs.membersSize)].map((value, index) => (
				<div>
					<h3>Pasajero {index + 1}</h3>

					<Form.Item
						label='Nombre(s)'
						hasFeedback
						validateStatus={nameStatusArr[index]?.validateStatus}
						help={nameStatusArr[index]?.errorMsg}>
						<Input
							defaultValue={
								inputs.members[index]?.name === undefined
									? ''
									: inputs.members[index]?.name
							}
							onChange={(e) =>
								addMemberInfoAndValidateNotEmpty(
									'name',
									index,
									e.target.value
								)
							}
						/>
					</Form.Item>

					<Form.Item
						label='Apellido(s)'
						hasFeedback
						validateStatus={lastNameStatusArr[index]?.validateStatus}
						help={lastNameStatusArr[index]?.errorMsg}>
						<Input
							defaultValue={
								inputs.members[index]?.lastName === undefined
									? ''
									: inputs.members[index]?.lastName
							}
							onChange={(e) =>
								addMemberInfoAndValidateNotEmpty(
									'lastName',
									index,
									e.target.value
								)
							}
						/>
					</Form.Item>

					<Form.Item label='Tipo de documento'>
						<Select
							defaultValue={
								inputs.members[index]?.idType === undefined
									? 'DNI'
									: inputs.members[index]?.idType
							}
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
							defaultValue={
								inputs.members[index]?.idNumber === undefined
									? ''
									: inputs.members[index]?.idNumber
							}
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
