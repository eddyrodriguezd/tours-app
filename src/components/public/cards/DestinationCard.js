import './DestinationCard.css'

export default function DestinationCard(props) {

    return(
        <div className="grid-element">
            <img src={props.img} alt=""/>
            <div class="card-text">
                <h3>{props.name}</h3>
            </div>
        </div>
    )

}