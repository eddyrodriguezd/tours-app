import React from 'react';
import './TourCard.css';

const TourCard = ({ id, img, name, onEditClick, onDeleteClick }) => (
	<div className='grid-wrapper'>

        <div className='grid-row left'>
		    <img src={img} alt='' />
        </div>

        <div className='grid-row right'>
            <div className='card-name'>
                <h3>{name}</h3>
            </div>
            <div className='card-buttons'>
                <div className='card-button-column'>
                    <div
                        className='tour-card-edit-button'
                        role='button'
                        onClick={() => onEditClick(id)}
                        onKeyDown={() => onEditClick(id)}
                        tabIndex={0}>
                        Editar
                    </div>
                </div>                
                <div className='card-button-column'>
                    <div
                        className='tour-card-delete-button'
                        role='button'
                        onClick={() => onDeleteClick(id)}
                        onKeyDown={() => onDeleteClick(id)}
                        tabIndex={0}>
                        Eliminar
                    </div>
                </div>
            </div>
        </div>
	</div>
);

export default TourCard;
