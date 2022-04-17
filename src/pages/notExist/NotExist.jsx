import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const NotExist = () => (
	<Result
		status='404'
		title='404'
		subTitle='Lo sentimos, la página que visitaste no existe.'
		extra={
			<Link to='/'>
				<Button type='primary'>Regresar</Button>
			</Link>
		}
	/>
);

export default NotExist;
