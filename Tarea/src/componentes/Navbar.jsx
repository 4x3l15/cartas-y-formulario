import React, { useContext } from "react";
import { Contexto } from "../context/MiProvider";
// Agrega la imagen importada si aún no lo has hecho

function Navbar() {
  const { setBusqueda } = useContext(Contexto);

  const handleSearch = (event) => {
    setBusqueda(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src='https://upload.wikimedia.org/wikipedia/en/8/85/Mar%C3%ADa_Becerra_-_La_Nena_de_Argentina.jpg' alt="Logo" className="logo" />
        <h1 className="navbar-title">LA NENA DE ARGENTINA</h1>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar cancion..."
            onChange={handleSearch}
          />
          {/* Agrega un icono o botón de búsqueda si es necesario */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
