import Navbar from "./Navbar";

/**
 * 
 * Componente Header
 * 
 * Componente que va a dar forma a la cabecera de la página web
 * En ella mostraremos la imagen de la empresa y el componente NavBar donde el usuario podra navegar a través de las ventanas de la página
 * 
 * @returns {JSX.Element}
 */
function Header() {
  return (
    <>
      <header className="relative w-full bg-[var(--color-secondary)] items-center justify-center mb-1 border-b-4 border-black">
        
        <img
          src="/Icono.png"
          alt="Logo YourLittleCandle"
          className="w-60 h-auto mx-auto mb-1"
        />

        <Navbar/>
      </header>
      
    </>
  );
}

export default Header;
