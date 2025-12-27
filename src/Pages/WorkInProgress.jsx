import { Link } from 'react-router-dom';

// Componente que muestra una página de "En construcción"
function WorkInProgress() {
  return (
    
    <div className="flex flex-col items-center relative w-full h-[900px]">

{/* Enlace para volver a la página de inicio */}
      <Link
        to="/"
        className="text-black hover:underline ml-4 bg-[var(--color-secondary)] border-2 border-black p-2 rounded-2xl"
      >
      Volver al inicio
      </Link>
      
      {/* Imagen centrada indicando que la página está en construcción */}
      <div className="absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
      
      <img
        src="/public/5578703.png"
        alt="Logo YourLittleCandle"
        className="w-auto h-auto object-cover"
      />
      </div>
    </div>
  );
}

export default WorkInProgress;
