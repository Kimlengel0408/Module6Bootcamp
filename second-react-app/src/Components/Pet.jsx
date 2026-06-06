import { Children } from "react";

function Pet(props) {
    let type = 'unknown';
    if (props.type) type = props.type;

    return (
        <div className = "Pet ComponentBox">
            <h2> My Pet </h2> <p>Type: {type}</p>

            {props.name ? <p>Name: {props.name}</p> : <p>This pet unnamed</p>}

            {props.colour && <p>Colour: {props.colour}</p>}

            {props.children}
        </div>
    )
}
export default Pet;