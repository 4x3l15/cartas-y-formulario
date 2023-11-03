import { useState } from 'react'
import Card from "./Card";
import "./App.css";
function App() {
  


	return (
		<div className="card-container">
			{cards.map((card) => (
				<Card
					key={card.id}
					imageUrl={card.imageUrl}
					title={card.title}
					onDelete={() => handleDeleteCard(card.id)} // Pasar la función de eliminación
				/> 
			))}
		</div>
	);
}
export default App
