import { Form, Input, Button, Image, Upload } from 'antd';
import { useSelector } from 'react-redux';
import { UploadOutlined } from '@ant-design/icons';

const Profile = () => {
	const { user } = useSelector((state) => state);
	const onFinish = (values) => {
		console.log('Success:', values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	const prefixSelector = <h4>+51</h4>;
	const normFile = (e) => {
		console.log('Upload event:', e);

		if (Array.isArray(e)) {
			return e;
		}

		return e && e.fileList;
	};
	return (
		<Form
			name='basic'
			labelCol={{
				span: 8,
			}}
			wrapperCol={{
				span: 8,
			}}
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete='off'>
			<fieldset>
				<legend>Perfil de Usuario</legend>
				<Form.Item
					name='upload'
					label='Upload'
					valuePropName='fileList'
					getValueFromEvent={normFile}
					extra=' '>
					<Image width={150} src={user.avatar.url} />
					<Upload name='logo' action='/upload.do' listType='picture'>
						<Button icon={<UploadOutlined />}>Click to upload</Button>
					</Upload>
				</Form.Item>

				<Form.Item label='Nombre' name='name'>
					<Input defaultValue={user.name} />
				</Form.Item>

				<Form.Item label='Correo' name='email'>
					<Input defaultValue={user.email} />
				</Form.Item>

				<Form.Item name='phone' label='Numero de telefono'>
					<Input addonBefore={prefixSelector} defaultValue={user.phone} />
				</Form.Item>
				<Form.Item name='address' label='Dirección'>
					<Input defaultValue={user.address} />
				</Form.Item>
				<Form.Item name='location' label='Localización'>
					<Input defaultValue={user.location} />
				</Form.Item>
				<Form.Item name='province' label='Provincia'>
					<Input defaultValue={user.province} />
				</Form.Item>
				<Form.Item name='region' label='Región'>
					<Input defaultValue={user.region} />
				</Form.Item>
				<Form.Item name='district' label='Distrito'>
					<Input defaultValue={user.district} />
				</Form.Item>
			</fieldset>
			{user.tipo === 'business' && (
				<fieldset>
					<legend>Perfil de Empresa</legend>
					<Form.Item name='name' label='Nombre del Negocio'>
						<Input defaultValue={user.business?.name} />
					</Form.Item>
					<Form.Item name='type' label='Tipo de Empresa'>
						<Input defaultValue={user.business?.type} />
					</Form.Item>
					<Form.Item name='ruc' label='Ruc de la empresa'>
						<Input defaultValue={user.business?.ruc} />
					</Form.Item>
				</fieldset>
			)}

			<Form.Item
				wrapperCol={{
					offset: 8,
					span: 16,
				}}>
				<Button type='primary' htmlType='submit'>
					Actualizar
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Profile;
