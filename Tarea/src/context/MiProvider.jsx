import { createContext, useState } from "react";

export const Contexto = createContext()
export default function MiProvider({ children }) {
    const [canciones, setcanciones] = useState([
        {
            id: 1,
            nombre: "PERREO FURIOSO",
            imagen: "https://i.ytimg.com/vi/wc-A5PAES2U/hqdefault.jpg",
            Artista:"Maria Becerra",
            Duración:"",
        },
        {
            id: 2,
            nombre: "AUTOMATICO",
            imagen: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Autom%C3%A1tico_single_cover.jpeg/220px-Autom%C3%A1tico_single_cover.jpeg",
            Artista:"Maria Becerra",
            Duración:"",
        },
        {
            id: 3,
            nombre: "CUANDO HACEMOS EL AMOR",
            imagen: "https://i.ytimg.com/vi/eezXVV7SgzI/maxresdefault.jpg",
            Artista:"Maria Becerra",
            Duración:"",
        },
        {
            id: 4,
            nombre: "OJALÁ",
            imagen: "https://i.scdn.co/image/ab67616d0000b27370159be5a347d3b52cfaecab",
            Artista:"Maria Becerra",
            Duración:"",
        },
        {
            id: 5,
            nombre: "ADIÓS",
            imagen: "https://i.ytimg.com/vi/_zDkKfNgido/maxresdefault.jpg",
            Artista:"Maria Becerra",
            Duración:"",
        },
        {
            id: 6,
            nombre: "HASTA QUE LA MUERTE NOS SEPARE",
            imagen: "https://i.ytimg.com/vi/cZZ2sg_RDlw/maxresdefault.jpg",
            Artista:"Maria Becerra",
            Duración:"",
        },
        {
            id: 7,
            nombre: "DOBLE VIDA",
            imagen: "https://i.ytimg.com/vi/bUpb89AQSTs/maxresdefault.jpg",
            Artista:"Maria Becerra",
            Duración:"",
        },
        {
            id: 8,
            nombre: "INSPIRADORA",
            imagen: "https://i.ytimg.com/vi/OZBtQXJHJxg/maxresdefault.jpg",
            Artista:"Maria Becerra",
            Duración:"",
        },
        {
            id: 9,
            nombre: "PÍDELO",
            imagen: "https://i.ytimg.com/vi/bqEdoyx_2R8/hqdefault.jpg",
            Artista:"Maria Becerra",
            Duración:"",
        },
        {
            id: 10,
            nombre: "MANDAMIENTOS",
            imagen: "https://i.ytimg.com/vi/1eBEiQANfis/maxresdefault.jpg",
            Artista:"Maria Becerra",
            Duración:"",
        },
        {
            id: 11,
            nombre: "NUNCA PASARÁ",
            imagen: "https://i.ytimg.com/vi/IoSfIhIIakA/maxresdefault.jpg",
            Artista:"Maria Becerra",
            Duración:"",
        },
        {
            id: 12,
            nombre: "LA NENA DE ARGENTINA",
            imagen: "https://i.ytimg.com/vi/qGqf-feIVNc/hqdefault.jpg?v=63924dbe",
            Artista:"Maria Becerra",
            Duración:"",
        },
        {
            id: 13,
            nombre: "DESAFIANDO EL DESTINO",
            imagen: "https://i.ytimg.com/vi/IvPiE8h_IFU/sddefault.jpg",
            Artista:"Maria Becerra",
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