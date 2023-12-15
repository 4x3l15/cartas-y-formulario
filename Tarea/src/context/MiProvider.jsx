import { createContext, useState } from "react";

export const Contexto = createContext()
export default function MiProvider({ children }) {
    const [canciones, setcanciones] = useState([
        {
            id: 1,
            nombre: "PERREO FURIOSO",
            imagen: "https://i.ytimg.com/vi/wc-A5PAES2U/maxresdefault.jpg",
            Artista:"Maria Becerra",
            Duración:"2:32",
        },
        {
            id: 2,
            nombre: "AUTOMATICO",
            imagen: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Autom%C3%A1tico_single_cover.jpeg/220px-Autom%C3%A1tico_single_cover.jpeg",
            Artista:"Maria Becerra",
            Duración:"2:55",
        },
        {
            id: 3,
            nombre: "CUANDO HACEMOS EL AMOR",
            imagen: "https://i.ytimg.com/vi/eezXVV7SgzI/maxresdefault.jpg",
            Artista:"Maria Becerra",
            Duración:"3:34",
        },
        {
            id: 4,
            nombre: "OJALÁ",
            imagen: "https://i.scdn.co/image/ab67616d0000b27370159be5a347d3b52cfaecab",
            Artista:"Maria Becerra",
            Duración:"2:40",
        },
        {
            id: 5,
            nombre: "ADIÓS",
            imagen: "https://i.ytimg.com/vi/_zDkKfNgido/maxresdefault.jpg",
            Artista:"Maria Becerra",
            Duración:"2:40",
        },
        {
            id: 6,
            nombre: "HASTA QUE LA MUERTE NOS SEPARE",
            imagen: "https://i.ytimg.com/vi/cZZ2sg_RDlw/maxresdefault.jpg",
            Artista:"Maria Becerra",
            Duración:"3:27",
        },
        {
            id: 7,
            nombre: "DOBLE VIDA",
            imagen: "https://i.ytimg.com/vi/bUpb89AQSTs/maxresdefault.jpg",
            Artista:"Maria Becerra",
            Duración:"3:01",
        },
        {
            id: 8,
            nombre: "INSPIRADORA",
            imagen: "https://i.ytimg.com/vi/OZBtQXJHJxg/maxresdefault.jpg",
            Artista:"Maria Becerra",
            Duración:"3:00",
        },
        {
            id: 9,
            nombre: "PÍDELO",
            imagen: "https://i.ytimg.com/vi/bqEdoyx_2R8/maxresdefault.jpg",
            Artista:"Maria Becerra",
            Duración:"2:49",
        },
        {
            id: 10,
            nombre: "MANDAMIENTOS",
            imagen: "https://i.ytimg.com/vi/1eBEiQANfis/maxresdefault.jpg",
            Artista:"Maria Becerra",
            Duración:"2:22",
        },
        {
            id: 11,
            nombre: "NUNCA PASARÁ",
            imagen: "https://i.ytimg.com/vi/IoSfIhIIakA/maxresdefault.jpg",
            Artista:"Maria Becerra",
            Duración:"2:53",
        },
        {
            id: 12,
            nombre: "LA NENA DE ARGENTINA",
            imagen: "https://i.ytimg.com/vi/qGqf-feIVNc/maxresdefault.jpg",
            Artista:"Maria Becerra",
            Duración:"2:31",
        },
        {
            id: 13,
            nombre: "DESAFIANDO EL DESTINO",
            imagen: "https://i.vimeocdn.com/video/1719850469-9d9eeeb14c43ed39ba2fb4698b06cd6fa9ea61cd81ebf3d51d6d959a351de4a9-d?f=webp",
            Artista:"Maria Becerra",
            Duración:"3:12",
        },
    ])
    const [busqueda, setBusqueda] = useState("");

    return (<>
        <Contexto.Provider value={{ canciones, setcanciones, busqueda, setBusqueda }}>
            {children}
        </Contexto.Provider>
        </>)
}