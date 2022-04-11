/* eslint-disable arrow-body-style */
import '../../Login.css';
import { Tabs } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Business from './business/Business';
import Users from './users/Users';

const { TabPane } = Tabs;
const operations = (
	<Link to='/' style={{ margin: '10px', marginLeft: '15px' }}>
		<ArrowLeftOutlined style={{ fontSize: '1.5rem' }} />
	</Link>
);
const Register = () => (
	<Tabs defaultActiveKey='1' tabBarExtraContent={{ left: operations }}>
		<TabPane tab='usuario' key='1'>
			<Users />
		</TabPane>
		<TabPane tab='empresa' key='2'>
			<Business />
		</TabPane>
	</Tabs>
);

export default Register;
