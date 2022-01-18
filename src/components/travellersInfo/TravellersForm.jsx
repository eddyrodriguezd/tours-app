import { useState } from 'react';
import moment from 'moment';
import { Form, Input, Select, DatePicker, InputNumber, } from 'antd';

const { Option } = Select;
const dateFormat = 'DD/MM/YYYY';

const TravellersForm = () => {
  const [travellersQty, setTravellersQty] = useState(1);

  const onTravellersQtyChange = (quantity) => {
    setTravellersQty(quantity);
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout='horizontal'
      initialValues={{ size: 'default' }}
      size='default'>

      <h2>Datos del viaje</h2>

      <Form.Item label='Cantidad de pasajeros'>
        <InputNumber min={1} max={10} defaultValue={1} onChange={onTravellersQtyChange} />
      </Form.Item>

      <Form.Item label='Fecha de salida'>
        <DatePicker defaultValue={moment(new Date(), dateFormat)} format={dateFormat} />
      </Form.Item>

      <h2>Datos de los pasajeros</h2>

      {[...Array(travellersQty)].map((value, index) => (
        <div>
          <h3>Pasajero {index + 1}</h3>
          <Form.Item label='Nombres'>
            <Input />
          </Form.Item>
          <Form.Item label='Apellidos'>
            <Input />
          </Form.Item>
          <Form.Item label='Tipo de documento'>
            <Select defaultValue="DNI" style={{ width: 120 }} >
              <Option value="DNI">DNI</Option>
              <Option value="CE">CE</Option>
              <Option value="Pasaporte">Pasaporte</Option>
            </Select>
          </Form.Item>
          <Form.Item label='Número de documento'>
            <Input />
          </Form.Item>
        </div>
      ))}

      <h2>Datos de contacto</h2>

      <Form.Item label='Email'>
        <Input />
      </Form.Item>
      <Form.Item label='Teléfono'>
        <Input />
      </Form.Item>

    </Form>
  );
};

export default TravellersForm;
