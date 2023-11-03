import React, { useState } from "react";

function Card({ imageUrl, title, onDelete }) {
	const [contador, setCounter] = useState(0);

	const incrementCounter = () => {
		setCounter(contador + 1);
	};

	return (
		<div className="card">
			<img className="tarjeta" src={imageUrl} alt="" />
			<h1> {title}</h1>
			<p>LIKES {contador}</p>
			<button id="boton1" onClick={incrementCounter}>Like</button>
			<button id="boton2" onClick={onDelete}>Borrar</button>
		</div>
	);
}

export default Card;