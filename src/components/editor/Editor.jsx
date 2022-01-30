import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = ({ valor, setValue, indice }) => {
	const modules = {
		toolbar: [
			[{ header: '1' }, { header: '2' }, { font: [] }],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[{ color: [] }, { background: [] }],
			[{ align: [] }],
			[
				{ list: 'ordered' },
				{ list: 'bullet' },
				{ indent: '-1' },
				{ indent: '+1' },
			],
			['link', 'image', 'video'],
			[{ script: 'sub' }, { script: 'super' }],
		],
	};

	const formats = [
		'header',
		'font',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'background',
		'code',
		'script',
		'list',
		'bullet',
		'indent',
		'link',
		'image',
		'video',
	];
	/* var Font = Quill.import('formats/font');
	Font.whitelist = ['Roboto', 'Raleway', 'Montserrat', 'Lato', 'Rubik'];
	Quill.register(Font, true); */
	const valorItinerario = [...valor];
	const setValueEditor = (textoEditor) => {
		valorItinerario[indice].descripcion = textoEditor;
		setValue(valorItinerario);
	};
	return (
		<ReactQuill
			theme='snow'
			value={valorItinerario[indice].descripcion}
			onChange={setValueEditor}
			modules={modules}
			formats={formats}
		/>
	);
};

export default Editor;
