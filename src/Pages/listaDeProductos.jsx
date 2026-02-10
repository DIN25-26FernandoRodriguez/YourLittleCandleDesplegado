// import productos from "../data/productos.js"
import Card from '../Componentes/Card.jsx'
import Layout from "../Componentes/Layout.jsx"
import { useState } from "react";
import SearchBar from "../Componentes/SearchBar.jsx";
import { useMemo } from "react";
import { useProductos } from "../hooks/useGetAllProducts.js";
import useVoiceRecognition from "../hooks/useVoiceRecognition";
import { Mic } from "lucide-react"; // npm install lucide-react

// Componente para listar todos los productos
function ListarProductos() {
  const [searchTerm, setSearchTerm] = useState(""); // Declaro el estádo que se va a guardar
  const {data: productos = [], loading, error } = useProductos();

   const voice = useVoiceRecognition((text) => setSearchTerm(text));

    const todosLosProductos = useMemo(() => {
    if (!searchTerm) {
      return productos;
      // Si no hay término, devuelve la lista completa
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return productos.filter((producto) =>
      // Filtra por el nombre de la película
      producto.nombre.toLowerCase().includes(lowerCaseSearchTerm)
    )
  }, [searchTerm, productos]);

    // Detectamos si es móvil
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  const [touchStartX, setTouchStartX] = useState(null);

  const handleTouchStart = (e) => {
  setTouchStartX(e.touches[0].clientX);
};

const handleTouchEnd = (e) => {
  if (touchStartX === null) return;

  const touchEndX = e.changedTouches[0].clientX;
  const diff = touchEndX - touchStartX;

  // Swipe hacia la derecha (ajustable)
  if (diff > 80 && voice.isSupported) {
    voice.startListening();
  }

  setTouchStartX(null);
};

  return (
    <>
    {/* Usamos el componente Layout para envolver el contenido principal */}
      <Layout>
        <h1 className=" pb-10 text-4xl text-[#674835] font-bold">- Velas aromáticas -</h1>



        <div
        onTouchStart={isMobile ? handleTouchStart : undefined}
  onTouchEnd={isMobile ? handleTouchEnd : undefined}
        >
          <SearchBar 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Buscar producto por nombre.."
        className={!isMobile ? "pr-12" : ""}
        />

        {!isMobile && voice.isSupported && (
          <button
            onClick={voice.startListening}
            className={`absolute top-[53%] ml-56 -translate-y-1/2 transition
              ${voice.isListening
                ? "text-red-500 animate-pulse"
                : "text-gray-400 hover:text-blue-600"
              }`}
            title="Buscar por voz"
          >
            <Mic size={20} />
          </button>
        )}
        </div>

        

        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
            {todosLosProductos.length > 0 ? (
          todosLosProductos.map((producto) => (
            <Card
                key={producto.id}
                name={producto.nombre}
                image={producto.imagen}
                price={producto.precio}
                to={`/producto/${producto.id}`}
              >
                {producto.descripcion}
              </Card>
          ))
        ) : (
        // Mensaje si no hay resultados
        <p className="p-4 text-center text-gray-500 col-span-full"> No se encontraron productos con el término `{searchTerm}`. </p>
        )}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ListarProductos
