/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Card, Row, Col, Collapse } from 'antd';
import './Hotels.css';

const { Panel } = Collapse;
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
];
// const rooms2 = hoteles.map((room) => room.rooms);
// console.log(rooms2);

// eslint-disable-next-line spaced-comment
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line spaced-comment

const Hotel = () => (
	<div className='content'>
		<div className='content-img' />

		{hoteles.map((hotel) => (
			<Row gutter={24} className='content-card__col'>
				<Col span={12}>
					<Card className='content-card' title={hotel.name}>
						<div className='content-card__tabs'>
							<h3>Divisa : {hotel.currency}</h3>
							<p>Zona : {hotel.zone}</p>
							<p>Categoria : {hotel.category}</p>
						</div>
					</Card>
				</Col>
				<Col span={12}>
					<Collapse accordion className='content-card'>
						{hotel.rooms.map((room, index) => {
							const aux = index + 1;
							return (
								<Panel header={room.name} key={aux}>
									<p>Precio : {room.rate}</p>
								</Panel>
							);
						})}
					</Collapse>
				</Col>
			</Row>
		))}
	</div>
);

export default Hotel;
