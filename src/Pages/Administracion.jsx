import { Link, Outlet } from 'react-router-dom';

/**
 * Componente Administracion
 * * Actúa como layout para la sección de administración.
 * Contiene el Outlet donde se renderizarán los componentes hijos 
 * (como el FormularioControlado).
 */
function Administracion() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gray-50">
      
      <h1 className="mb-6 text-3xl font-bold text-gray-800">
        Panel de Administración
      </h1>

      {/* Navegación interna de administración */}
      <div className="flex gap-4 mb-8">
        <Link
          to="formulario"
          className="text-black hover:bg-amber-100 transition-colors bg-[var(--color-secondary)] border-2 border-black py-2 px-6 rounded-2xl font-medium"
        >
          Añadir un nuevo producto
        </Link>
        
        <Link
          to="/"
          className="px-6 py-2 text-gray-600 hover:underline"
        >
          Volver al Inicio
        </Link>
      </div> 

      {/* SECCIÓN CRÍTICA: Aquí se renderiza el FormularioControlado u otros hijos */}
      <div className="w-full max-w-4xl p-4 bg-white shadow-sm rounded-xl">
        <Outlet />
      </div>

      {/* Imagen decorativa de fondo o info */}
       
    </div>
  );
}

export default Administracion;