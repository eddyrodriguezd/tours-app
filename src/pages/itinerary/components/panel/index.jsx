import { useState } from 'react';

const ItineraryPanel = ({ titulo, description, children }) => {
	const [showBody, setPanel] = useState(false);
	function activate() {
		setPanel(!showBody);
	}
	return (
		<>
			<button
				type='button'
				className={showBody === false ? 'accordion' : 'accordion active'}
				onClick={activate}>
				{titulo}
			</button>
			<div className={showBody === false ? 'panel' : 'panel active'}>
				<p>{description}</p>
				{children}
			</div>
		</>
	);
};

export default ItineraryPanel;
