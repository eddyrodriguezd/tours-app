/* eslint-disable jsx-a11y/anchor-is-valid */
import { Table, Input, Space } from 'antd';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTours } from '../../api/tour/tour';

const { Search } = Input;
const ListTours = () => {
	const [dataTours, setDataTours] = useState([]);
	const [tableTours, setTableTours] = useState([]);
	const [inputSearch, setInputSearch] = useState([]);

	const columns = [
		{
			title: 'Titulo',
			dataIndex: 'title',
			key: 'title',
		},
		{
			title: 'Descripción',
			dataIndex: 'description',
			key: 'description',
		},
		{
			title: 'Destino',
			dataIndex: 'destination',
			key: 'destination',
		},
		{
			title: 'Categoria',
			dataIndex: 'categori',
			key: 'categori',
		},
		{
			title: 'Precio',
			dataIndex: 'price',
			key: 'price',
		},
		{
			title: 'N° Dias',
			dataIndex: 'nDays',
			key: 'nDays',
		},
		{
			title: 'Fecha Inicio',
			dataIndex: 'startDate',
			key: 'startDate',
		},
		{
			title: 'Fecha Fin',
			dataIndex: 'endDate',
			key: 'endDate',
		},
		{
			title: 'Acciones',
			dataIndex: '',
			key: 'actions',
			render: () => (
				<Space size='middle'>
					<Link to='/'>Actualizar</Link>
					<Link to='/'>Eliminar</Link>
				</Space>
			),
		},
	];

	const getDataTours = async () => {
		await getTours().then((datos) => {
			setDataTours(datos.value);
			setTableTours(datos.value);
		});
	};

	const findTitle = (value) => {
		setInputSearch(value);

		setTableTours(
			dataTours.filter((tour) =>
				tour.title.toString().toLowerCase().includes(value)
			)
		);
	};

	useEffect(async () => {
		await getDataTours();
	}, []);

	return (
		<>
			<Search
				placeholder='Buscar por título'
				enterButton='Search'
				size='large'
				value={inputSearch}
				onChange={(e) => {
					findTitle(e.target.value);
				}}
			/>
			<br />
			<br />
			<Table columns={columns} dataSource={tableTours} />
			{/* <Button onClick={getDataTours}>listar</Button> */}
		</>
	);
};

export default ListTours;
