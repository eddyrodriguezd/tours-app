import { useState } from 'react';

const ItineraryPanel = ({ titulo, description }) => {
	const [showBody, setPanel] = useState('accordion');
	function activate() {
		return showBody === 'accordion'
			? setPanel('accordion active')
			: setPanel('accordion');
	}
	return (
		<>
			<button type='button' className={showBody} onClick={activate}>
				{titulo}
			</button>
			<div className='panel' style={{ padding: '8px' }}>
				<p>{description}</p>
			</div>
		</>
	);
};

export default ItineraryPanel;
