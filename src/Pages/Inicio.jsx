
// Componente de la página de inicio
function Inicio() {
  return (
    <div className="relative w-full h-[900px]">
      {/* Imagen de fondo de la página de inicio */}
      <img
        src="/landingImage.png"
        alt="Logo YourLittleCandle"
        className="w-full h-full object-cover"
      />

      {/* Contenido superpuesto en el centro de la imagen */}
      <div className="absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
        <h1 className="text-4xl font-bold">Bienvenido a la página de inicio</h1>
        <p className="mt-4 text-lg">Explora nuestros productos.</p>
      </div>
    </div>
  );
}

export default Inicio;
