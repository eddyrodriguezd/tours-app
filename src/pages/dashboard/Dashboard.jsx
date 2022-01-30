import { Layout, Menu, Breadcrumb, Row, Col, Divider } from 'antd';
import {
	DesktopOutlined,
	PieChartOutlined,
	FileOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
	const { Header, Content, Footer, Sider } = Layout;
	// const { SubMenu } = Menu;
	const [collapsed, setCollapsed] = useState(false);
	const [imgPoint, setImgPoint] = useState(null);

	const points = (broken) => {
		const Point = broken ? { width: '70%' } : { width: '50%' };
		setImgPoint(Point);
	};
	const collapsedChange = () => {
		setCollapsed(!collapsed);
		const collapse = collapsed ? { width: '50%' } : { width: '70%' };
		setImgPoint(collapse);
	};
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider
				className='sider-content'
				collapsible
				collapsed={collapsed}
				onCollapse={collapsedChange}
				breakpoint='md'
				onBreakpoint={points}>
				<div className='content-usuario'>
					<img
						src='assets/img/logo/logo.png'
						alt='logo'
						className='content-usuario__img'
						style={imgPoint}
					/>
					{!collapsed && (
						<div className='content-usuario__role'>
							<h3>Usuario</h3>
							<span>role</span>
						</div>
					)}
				</div>
				<Menu
					theme='dark'
					defaultSelectedKeys={['1']}
					mode='inline'
					className='menu-content'>
					<Menu.Item key='1' icon={<PieChartOutlined />}>
						Estadísticas
					</Menu.Item>
					<Menu.Item key='2' icon={<DesktopOutlined />}>
						Agregar
					</Menu.Item>

					<Menu.Item key='9' icon={<FileOutlined />}>
						Modificar
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout>
				<Header className='site-layout-background' style={{ padding: 0 }}>
					<Row>
						<Col span={5} offset={2} className='content-empresa'>
							<img
								src='assets/img/logo/logo.png'
								alt='logo'
								className='content-empresa__img'
							/>
							<div className='content-empresa__name'>
								<h3>Empresa</h3>
								<span>Tours pe</span>
							</div>
						</Col>
						<Col span={13} offset={4} className='content-logout'>
							<div className='content-logout__name'>
								<h3>Usuario</h3>
								<span>Cerrar Sessión</span>
							</div>
							<img
								src='assets/img/logo/logo.png'
								alt='logo'
								className='content-logout__img'
							/>
						</Col>
					</Row>
				</Header>
				<Content style={{ margin: '0 16px' }}>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>User</Breadcrumb.Item>
						<Breadcrumb.Item>Bill</Breadcrumb.Item>
					</Breadcrumb>
					<Divider orientation='left'>Responsive</Divider>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Ant Design ©2018 Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	);
};

export default Dashboard;
