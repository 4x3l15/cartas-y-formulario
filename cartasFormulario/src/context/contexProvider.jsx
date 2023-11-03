import Card from "./card";
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
import { Children, useState } from "react";

export const ContextoProvider  = createContext();

function ContextProvider({children}) {
  const [cards, setCards] = useState([
		{
			id: 1,
			imageUrl:
				"https://motos.honda.com.co/images/cms/Negro-beda8.png",
			title: "WAVE 110S",
		},
		{
			id: 2,
			imageUrl:
				"https://http2.mlstatic.com/D_NQ_NP_774643-MLA46627347286_072021-O.webp",
			title: "WAVE 11O FULL",
		},
		{
			id: 3,
			imageUrl:
				"https://th.bing.com/th/id/R.4ef8259086d8cc693edf7ceb4cc4f138?rik=WBMZwD0LaeDfbg&pid=ImgRaw&r=0",
			title: "MOTORCYCLE",
		},
		{
			id: 4,
			imageUrl:
				"https://th.bing.com/th/id/OIP.dflAEOIL9A7b-UTA9VmVzgHaFx?pid=ImgDet&rs=1",
			title: "125 YAMAHA",
		},
		{
			id: 5,
			imageUrl:
				"https://th.bing.com/th/id/R.cfda56f718480740f9e84f08c0846b58?rik=7fcsLdzNdz1ySA&pid=ImgRaw&r=0",
			title: "C90",
		},
		{
			id: 6,
			imageUrl:
				"https://th.bing.com/th/id/OIP.tuy1Vn47L48pGr19ABxT0wHaE8?pid=ImgDet&rs=1",
			title: "CUSTOM 125CC",
		},
	]);

  const handleDeleteCard = (id) => {
		// Filtrar las tarjetas para eliminar la que coincida con el ID
		const updatedCards = cards.filter((card) => card.id !== id);
		setCards(updatedCards);
	};


  return (
    <div>
      <context.Provider>
        {children}
      </context.Provider>



    </div>
  )
}

export default ContextProvider