import {
	Form,
	Input,
	Button,
	Select,
	InputNumber,
	Upload,
	DatePicker,
	Card,
} from 'antd';
/* import { UploadOutlined } from '@ant-design/icons'; */
import 'antd/dist/antd.css';
import { useState, useEffect } from 'react';
import Editor from '../editor/Editor';
/* import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'; */

const { Option } = Select;

const RegisterTour = () => {
	const [tabItinerario, setItinerario] = useState([
		{
			dia: 'dia1',
			descripcion: '',
		},
	]);
	// const [dataTour, setDataTour] = useState([]);
	const dataTour = [];
	const [tabList, setTabList] = useState([
		{
			key: 'dia1',
			tab: 'dia1',
		},
	]);
	const [contentList, setContentList] = useState({
		día1: (
			<Editor
				key='dia1'
				valor={tabItinerario}
				setValue={setItinerario}
				indice='0'
			/>
		),
	});
	const addTour = ({ tour }) => {
		console.log(`titulo ${tour.titulo}`);
		const objTour = {
			titulo: tour.titulo,
			descripcion: tour.descripcion,
			destino: tour.destino,
			categoria: tour.categoria,
			precio: tour.precio,
			nDias: tour.nDias,
			fechaInicio: tour.fechaInicio.format('YYYY-MM-DD'),
			fechaFin: tour.fechaFin.format('YYYY-MM-DD'),
			images: tour.upload,
			itineraio: tabItinerario,
		};
		console.log('---------------------');
		console.log(objTour);
		console.log('---------------------');
		dataTour.push(objTour);
		// setDataTour([...dataTour, objTour]);
		console.log(dataTour);
		localStorage.setItem('tours', JSON.stringify(dataTour));
	};

	const [activeTabKey1, setActiveTabKey1] = useState('dia1');

	const onTab1Change = (key) => {
		setActiveTabKey1(key);
	};

	const handleNDias = (e) => {
		console.log(e);

		const arrayList = [...Array(e)].map((value, index) => ({
			key: `dia${index + 1}`,
			tab: `dia${index + 1}`,
		}));
		let nuevoArreglo = [];
		if (e < tabItinerario.length) {
			nuevoArreglo = [...tabItinerario].splice(0, e + 1);
		} else {
			console.log('entro al else');
			nuevoArreglo = [...tabItinerario];
			for (let i = 0; i < e - tabItinerario.length; i += 1) {
				console.log(i);
				nuevoArreglo.push({
					dia: `dia${tabItinerario.length + 1 + i}`,
					descripcion: '',
				});
			}
		}

		setItinerario(nuevoArreglo);

		setTabList(arrayList);
	};

	useEffect(() => {
		const objContentList = {};
		tabItinerario.forEach((value, index) => {
			const key = `dia${index + 1}`;
			objContentList[key] = (
				<Editor
					key={key}
					valor={tabItinerario}
					setValue={setItinerario}
					indice={index}
				/>
			);
		});
		setContentList(objContentList);
		// console.log(tabItinerario);
	}, [tabItinerario]);

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
				span: 6,
			}}
			wrapperCol={{
				span: 12,
			}}
			initialValues={{
				remember: true,
			}}
			onFinish={addTour}
			autoComplete='off'>
			<Form.Item
				label='Título'
				name={['tour', 'titulo']}
				rules={[
					{
						required: true,
						message: 'Ingrese Título',
					},
					{ whitespace: true },
					{ min: 4 },
				]}
				hasFeedback>
				<Input />
			</Form.Item>
			<Form.Item name={['tour', 'descripcion']} label='Descripción'>
				<Input.TextArea />
			</Form.Item>
			<Form.Item
				name={['tour', 'destino']}
				label='Destino'
				rules={[
					{
						required: true,
					},
				]}
				hasFeedback>
				<Select placeholder='Seleccione Destino' allowClear>
					<Option value='piura'>piura</Option>
					<Option value='tumbes'>tumbes</Option>
					<Option value='lima'>lima</Option>
				</Select>
			</Form.Item>
			<Form.Item
				name={['tour', 'categoria']}
				label='Categoria'
				rules={[
					{
						required: true,
					},
				]}
				hasFeedback>
				<Select placeholder='Seleccione Categoria' allowClear>
					<Option value='relax'>relax</Option>
					<Option value='playa'>playa</Option>
					<Option value='campo'>campo</Option>
				</Select>
			</Form.Item>
			<Form.Item
				rules={[
					{
						required: true,
					},
				]}
				label='Precio'
				name={['tour', 'precio']}>
				<InputNumber />
			</Form.Item>
			<Form.Item
				rules={[
					{
						required: true,
					},
				]}
				label='N° Dias'
				name={['tour', 'nDias']}>
				<InputNumber onChange={handleNDias} />
			</Form.Item>
			<Form.Item
				rules={[
					{
						required: true,
					},
				]}
				label='Fecha de Inicio'
				name={['tour', 'fechaInicio']}>
				<DatePicker />
			</Form.Item>
			<Form.Item
				rules={[
					{
						required: true,
					},
				]}
				label='Fecha de Fin'
				name={['tour', 'fechaFin']}>
				<DatePicker />
			</Form.Item>
			<Form.Item
				name={['tour', 'upload']}
				label='Subir Imagen'
				valuePropName='fileList'
				getValueFromEvent={normFile}
				extra='25kb'>
				<Upload.Dragger
					multiple
					listType='picture'
					accept='.png,.jpg'
					beforeUpload={(file) => {
						console.log(file);
						return false;
					}}>
					<Button>Subir</Button>
				</Upload.Dragger>
			</Form.Item>
			<br />
			<Form.Item
				rules={[
					{
						required: true,
					},
				]}
				name={['tour', 'itinerario']}
				label='Itinerario'>
				<Card
					tabList={tabList}
					activeTabKey={activeTabKey1}
					onTabChange={(key) => {
						onTab1Change(key);
					}}>
					{contentList[activeTabKey1]}
				</Card>
			</Form.Item>
			<Form.Item
				wrapperCol={{
					offset: 8,
					span: 16,
				}}>
				<Button type='primary' htmlType='submit'>
					Agregar
				</Button>
			</Form.Item>
		</Form>
	);
};

export default RegisterTour;
