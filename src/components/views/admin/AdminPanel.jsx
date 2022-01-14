import AdminTours from './AdminTours';
import mock from '../../../mock/mock';

const AdminPanel = () => (
	<div className=''>
		<AdminTours tours={mock.tours} />
	</div>
);

export default AdminPanel;
