import Tarjeta from "./Tarjeta";
import "./index.css"


function App() {
  return (
    <>
    <div className="contenedor">

      <Tarjeta
        nombre="Mary Shelley"
        profesion="Escritora y dramaturga britanica"
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxV1ctVkjYY6FWzar0Jr3o6u4BwSJ8u_PvJg&s"
        descripcion="Fue una escritora, dramaturga, ensayista y biógrafa británica."
      />

      <Tarjeta
        nombre="Howard Phillips Lovecraft"
        profesion="Escritor"
        imagen="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/H._P._Lovecraft%2C_June_1934.jpg/250px-H._P._Lovecraft%2C_June_1934.jpg"
        descripcion="Autor de relatos de novela de terror y ciencia ficción."
      />

      <Tarjeta
        nombre="Stephen King"
        profesion="Escritor"
        imagen="https://cdn.prod.website-files.com/65b1224851bd15cb61dd5ac7/68a9da28c0e3e0175f3fa069_stephen_king_portada.jpg"
        descripcion="Libros de terror y suspenso."
      />
    </div>
    </>
  )
}

export default App

