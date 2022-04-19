/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Radio, Tag, Rate, Button } from 'antd';
import style from './Hotels.module.css';
// eslint-disable-next-line no-unused-vars

// const rooms2 = hoteles.map((room) => room.rooms);
// console.log(rooms2);

// eslint-disable-next-line spaced-comment
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line spaced-comment

// eslint-disable-next-line no-unused-vars
const Hotel = ({ hoteles, onChangeFn, setRadioComplete }) => {
	// eslint-disable-next-line no-unused-vars
	const [disable, setDisable] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const [valor, setValor] = useState();

	const onChange = (e) => {
		const [nameHotel, indexRoom] = e.target.value.split('_&_');
		const hotel = hoteles.find((hotl) => hotl.name === nameHotel);
		const newHotel = {
			name: hotel.name,
			room: {
				category: hotel.category,
				beds: 1,
			},
			guests: 0,
			price: {
				amount: hotel.rooms[indexRoom].rate,
				currency: hotel.currency,
			},
		};
		onChangeFn('hotel', newHotel);
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
								const name = `${hotel.name}_&_${index}`;
								return (
									<Radio
										value={name}
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
