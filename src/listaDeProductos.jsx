import productos from "./data/productos.js"
import Card from './Componentes/Card.jsx'
import Layout from "./Componentes/Layout.jsx"
import { useState } from "react";
import SearchBar from "./Componentes/SearchBar.jsx";
import { useMemo } from "react";

// Componente para listar todos los productos
function ListarProductos() {
  const [searchTerm, setSearchTerm] = useState(""); // Declaro el estádo que se va a guardar

    const todosLosProductos = useMemo(() => {
    if (!searchTerm) {
      return productos;
      // Si no hay término, devuelve la lista completa
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return productos.filter((producto) =>
      // Filtra por el nombre de la película
      producto.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);

  return (
    <>
    {/* Usamos el componente Layout para envolver el contenido principal */}
      <Layout>
        <h1 className="text-4xl text-[#674835] font-bold">- Velas aromáticas -</h1>

        <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Buscar producto por nombre.." />

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {/* Mapeamos el array de productos para crear una Card por cada producto */}
            {/* {productos.map((producto) => (
              <Card
                key={producto.id}
                name={producto.name}
                image={producto.image}
                price={producto.price}
                to={`/producto/${producto.id}`}
              >
                {producto.description}
              </Card>
            ))} */}
            {todosLosProductos.length > 0 ? (
          todosLosProductos.map((producto) => (
            <Card
                key={producto.id}
                name={producto.name}
                image={producto.image}
                price={producto.price}
                to={`/producto/${producto.id}`}
              >
                {producto.description}
              </Card>
          ))
        ) : (
        // Mensaje si no hay resultados
        <p className="col-span-full text-center text-gray-500 p-4"> No se encontraron películas con el término `{searchTerm}`. </p>
        )}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ListarProductos
