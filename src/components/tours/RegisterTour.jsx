import { Form, Input, Button, Select, InputNumber, Upload } from 'antd';
/* import { UploadOutlined } from '@ant-design/icons'; */
import 'antd/dist/antd.css';

const { Option } = Select;

const RegisterTour = () => (
	<Form
		name='basic'
		labelCol={{
			span: 8,
		}}
		wrapperCol={{
			span: 16,
		}}
		initialValues={{
			remember: true,
		}}
		autoComplete='off'>
		<Form.Item
			name='destino'
			label='Destino'
			rules={[
				{
					required: true,
				},
			]}>
			<Select placeholder='Seleccione el Destino' allowClear>
				<Option value='piura'>piura</Option>
				<Option value='tumbes'>tumbes</Option>
				<Option value='lima'>lima</Option>
			</Select>
		</Form.Item>
		<Form.Item label='Precio'>
			<InputNumber />
		</Form.Item>
		<Form.Item
			label='Días'
			name='dias'
			rules={[
				{
					required: true,
					message: 'Número de Días',
				},
			]}>
			<Input />
		</Form.Item>
		<Form.Item
			label='Noches'
			name='noches'
			rules={[
				{
					required: true,
					message: 'Número de noches',
				},
			]}>
			<Input />
		</Form.Item>
		<Form.Item
			name='upload'
			label='Subir Imagen'
			valuePropName='fileList'
			/* getValueFromEvent={normFile} */
			extra='25kb'>
			<Upload name='logo' action='/upload.do' listType='picture'>
				<Button>Subir</Button>
			</Upload>
		</Form.Item>
		<Form.Item name={['user', 'description']} label='Descripción'>
			<Input.TextArea />
		</Form.Item>

		<Form.Item
			wrapperCol={{
				offset: 8,
				span: 16,
			}}>
			<Button type='primary' htmlType='submit'>
				Confirmar
			</Button>
		</Form.Item>
	</Form>
);

export default RegisterTour;
