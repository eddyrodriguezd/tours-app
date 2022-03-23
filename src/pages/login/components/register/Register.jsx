/* eslint-disable arrow-body-style */

import { Tabs } from 'antd';
import '../../Login.css';
import Business from './business/Business';
import Users from './users/Users';

const { TabPane } = Tabs;

const Register = () => (
	<Tabs defaultActiveKey='1'>
		<TabPane tab='usuario' key='1'>
			<Users />
		</TabPane>
		<TabPane tab='empresa' key='2'>
			<Business />
		</TabPane>
	</Tabs>
);

export default Register;
