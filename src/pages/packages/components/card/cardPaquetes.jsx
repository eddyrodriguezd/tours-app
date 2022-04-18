/* eslint-disable no-underscore-dangle */
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Card, Col, Row } from 'antd';
import { getTours } from '../../../../api/tour/tour';

const CardPaquetes = () => {
	const [dataTours, setDataTours] = useState([]);
	const getDataTours = async () => {
		await getTours().then((datos) => {
			setDataTours(datos.value);
			console.log(datos.value);
		});
	};
	useEffect(getDataTours, []);

	return (
		<div className='site-card-wrapper'>
			<Row gutter={[16, 16]}>
				{dataTours.map((e, index) => {
					const i = index * 2;
					return (
						<Col key={i} xs={24} sm={12} md={8} lg={6}>
							<Link to={`/itinerario/${e._id}`} state={{ tour: e }}>
								<Card
									title={e.title}
									bordered={false}
									className='card-packages'>
									<img
										className='img_package'
										src={
											e.images[0]
												? e.images[0]
												: 'https://res.cloudinary.com/dmorxcs1y/image/upload/v1650170655/samples/mulyadi-ZnLprInKM7s-unsplash_1_nqiqes.jpg'
										}
										alt={e.images[0]}
									/>
									)<h3>{`${e.nDays} días`}</h3>
								</Card>
							</Link>
						</Col>
					);
				})}
			</Row>
		</div>
	);
};

export default CardPaquetes;
