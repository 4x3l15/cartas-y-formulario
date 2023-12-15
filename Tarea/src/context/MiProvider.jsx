import { createContext, useState } from "react";

export const Contexto = createContext()
export default function MiProvider({ children }) {
    const [canciones, setcanciones] = useState([
        {
            id: 1,
            nombre: "PERREO FURIOSO",
            imagen: "https://i.ytimg.com/vi/wc-A5PAES2U/hqdefault.jpg",
            Artista:"",
            Duración:"",
        },
        {
            id: 2,
            nombre: "AUTOMATICO",
            imagen: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Autom%C3%A1tico_single_cover.jpeg/220px-Autom%C3%A1tico_single_cover.jpeg",
            Artista:"",
            Duración:"",
        },
        {
            id: 3,
            nombre: "CUANDO HACEMOS EL AMOR",
            imagen: "https://i.ytimg.com/vi/eezXVV7SgzI/maxresdefault.jpg",
            Artista:"",
            Duración:"",
        },
        {
            id: 4,
            nombre: "OJALÁ",
            imagen: "https://i.scdn.co/image/ab67616d0000b27370159be5a347d3b52cfaecab",
            Artista:"",
            Duración:"",
        },
        {
            id: 5,
            nombre: "ADIÓS",
            imagen: "",
            Artista:"",
            Duración:"",
        },
        {
            id: 6,
            nombre: "HASTA QUE LA MUERTE NOS SEPARE",
            imagen: "",
            Artista:"",
            Duración:"",
        },
        {
            id: 7,
            nombre: "DOBLE VIDA",
            imagen: "",
            Artista:"",
            Duración:"",
        },
        {
            id: 8,
            nombre: "INSPIRADORA",
            imagen: "",
            Artista:"",
            Duración:"",
        },
        {
            id: 9,
            nombre: "PÍDELO",
            imagen: "",
            Artista:"",
            Duración:"",
        },
        {
            id: 10,
            nombre: "MANDAMIENTOS",
            imagen: "",
            Artista:"",
            Duración:"",
        },
        {
            id: 11,
            nombre: "NUNCA PASARÁ",
            imagen: "",
            Artista:"",
            Duración:"",
        },
        {
            id: 12,
            nombre: "LA NENA DE ARGENTINA",
            imagen: "",
            Artista:"",
            Duración:"",
        },
        {
            id: 13,
            nombre: "DESAFIANDO EL DESTINO",
            imagen: "",
            Artista:"",
            Duración:"",
        },
    ])
    const [busqueda, setBusqueda] = useState("");

    return (<>
        <Contexto.Provider value={{ canciones, setcanciones, busqueda, setBusqueda }}>
            {children}
        </Contexto.Provider>
        </>)
}