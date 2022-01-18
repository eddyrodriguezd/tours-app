import { useState } from 'react';
import { Steps, Button, message } from 'antd';

import TravellersForm from '../../components/travellersInfo/TravellersForm';
import FlyingPoints from '../../components/tickets';


import './Checkout.css';

const { Step } = Steps;

const steps = [
    {
        title: 'Información',
        content: <TravellersForm />,
    },
    {
        title: 'Vuelo',
        content: <FlyingPoints />,
    },
    {
        title: 'Pago',
        content: 'Last-content',
    },
];

const Checkout = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <div style={{ marginTop: '6rem' }}>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Checkout;