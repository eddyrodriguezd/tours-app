import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'antd';
import { paquete } from '../../../../mock/sliderImages';

const CardPaquetes = () => (
	<div className='site-card-wrapper'>
		<Row gutter={[16, 16]}>
			{paquete.map((e, index) => {
				const i = index * 2;
				return (
					<Col key={i} xs={24} sm={12} md={8} lg={6}>
						<Link
							to={`/itinerario/${e.id}`}
							state={{ tour: paquete[e.id - 1] }}>
							<Card
								title={e.title}
								bordered={false}
								className='card-packages'>
								<img
									className='img_package'
									src={`assets/img/${e.img}.jpg`}
									alt={e.img}
								/>
								<h3>{`${e.n_dias} días / ${e.n_noches} noches`}</h3>
							</Card>
						</Link>
					</Col>
				);
			})}
		</Row>
	</div>
);

export default CardPaquetes;
