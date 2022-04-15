/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Radio, Tag, Rate, Button } from 'antd';
import style from './Hotels.module.css';

// eslint-disable-next-line no-unused-vars
const hoteles = [
	{
		name: 'Hotel Carrera',
		category: '4 STARS',
		zone: 'Centro',
		currency: 'EUR',
		rooms: [
			{
				name: 'DOUBLE SUPERIOR',
				rate: '476.72',
			},
			{
				name: 'JUNIOR SUITE CAPACITY 2',
				rate: '506.56',
			},
		],
	},
	{
		name: 'Qorianka Hotel',
		category: '3 STARS',
		zone: 'Centro',
		currency: 'EUR',
		rooms: [
			{
				name: 'TWIN STANDARD',
				rate: '518.24',
			},
			{
				name: 'DOUBLE EXECUTIVE',
				rate: '569.55',
			},
		],
	},

	{
		name: 'Roosevelt Hotel & Suites',
		category: '4 STARS',
		zone: 'San Isidro',
		currency: 'EUR',
		rooms: [
			{
				name: 'DOUBLE STANDARD',
				rate: '595.60',
			},
			{
				name: 'JUNIOR SUITE STANDARD',
				rate: '706.88',
			},
		],
	},

	{
		name: 'Palmetto Hotel Business La Perla',
		category: '3 STARS',
		zone: 'San Miguel',
		currency: 'EUR',
		rooms: [
			{
				name: 'DOUBLE STANDARD',
				rate: '370.80',
			},
			{
				name: 'DOUBLE EXECUTIVE SUPERIOR',
				rate: '463.44',
			},
			{
				name: 'TWIN STANDARD',
				rate: '556.24',
			},
			{
				name: 'SUITE STANDARD',
				rate: '584.00',
			},
		],
	},

	{
		name: 'Roosevelt Hotel & Suites',
		category: '4 STARS',
		zone: 'San Isidro',
		currency: 'EUR',
		rooms: [
			{
				name: 'DOUBLE STANDARD',
				rate: '595.60',
			},
			{
				name: 'JUNIOR SUITE STANDARD',
				rate: '706.88',
			},
		],
	},

	{
		name: 'Roosevelt Hotel & Suites',
		category: '4 STARS',
		zone: 'San Isidro',
		currency: 'EUR',
		rooms: [
			{
				name: 'DOUBLE STANDARD',
				rate: '595.60',
			},
			{
				name: 'JUNIOR SUITE STANDARD',
				rate: '706.88',
			},
		],
	},
];
// const rooms2 = hoteles.map((room) => room.rooms);
// console.log(rooms2);

// eslint-disable-next-line spaced-comment
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line spaced-comment

// eslint-disable-next-line no-unused-vars
const Hotel = ({ onChangeFn, setRadioComplete }) => {
	// eslint-disable-next-line no-unused-vars
	const [disable, setDisable] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const [valor, setValor] = useState();

	const onChange = (e) => {
		onChangeFn('precio', e.target.value);

		setValor(e.target.value);
		if (e.target.checked) {
			setDisable(true);
			setRadioComplete(true);
		} else {
			setDisable(false);
		}
	};
	const handleClick = () => {
		setDisable(false);
		setRadioComplete(false);
		setValor(0);
	};

	return (
		<div className={style.content}>
			<Button
				type='primary'
				onClick={handleClick}
				className={style.content__btn}>
				refrescar
			</Button>
			{hoteles.map((hotel) => {
				const start = hotel.category.split(' ')[0];
				return (
					<div className={style.content_list}>
						<div className={style.content__tabs}>
							<h3>{hotel.name}</h3>
							<h4>Divisa : {hotel.currency}</h4>
							<p>Zona : {hotel.zone}</p>
							<p>
								Categoria :{' '}
								<Rate
									disabled
									defaultValue={start}
									style={{ fontSize: '.8rem' }}
								/>
							</p>
						</div>

						<Radio.Group
							onChange={onChange}
							value={valor}
							className={style.content__radio}>
							{hotel.rooms.map((room, index) => {
								const aux = index + 1;
								return (
									<Radio
										value={room.rate}
										className={style.content__RadioLabel}
										key={aux}
										disabled={disable}
										// eslint-disable-next-line react/jsx-boolean-value
										checked={true}>
										{room.name} <br />
										<Tag color='geekblue' style={{ fontSize: '.6rem' }}>
											{' '}
											PRECIO : {room.rate}
										</Tag>
									</Radio>
								);
							})}
						</Radio.Group>
					</div>
				);
			})}
		</div>
	);
};

export default Hotel;
