

function Tarjeta({ nombre, profesion, imagen, descripcion }) {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={`Foto de ${nombre}`} />
      <div className="texto">
        <h2>{nombre}</h2>
        <h3>{profesion}</h3>
        <p>{descripcion}</p>
      </div>
    </div>
  )
}

export default Tarjeta

