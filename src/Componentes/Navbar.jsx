import { Link } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (

    // Contenedor principal de la barra de navegación
    <header className="relative w-full bg-[var(--color-secondary)] p-4 shadow-md">

  

      {/* Navegación para pantallas medianas y grandes */} 
    <nav
      className="hidden md:flex gap-8 text-lg flex-1 justify-center" aria-label="Barra de navegación">
      <Link to="/">Inicio</Link>
      <Link to="/listaDeProductos">Nuestras velas</Link>
      <Link to="/quienes">Quienes somos</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/administracion">Administracion</Link>
    </nav>

    {/* Configuración para esconder el boton hamburguesa en pantallas medianas y grandes*/}
    <button onClick={() => setOpen(!open)} className="md:hidden text-2xl" aria-lablel="Menú hamburguesa" 
    aria-expanded={open} aria-controls="menu-movil">☰</button>

    {/* Configuración para que el menu hamburguesa se vea solamente en pantallas pequeñas*/}
    {/* Le he tenido que configurar z-50 porque cuando abria el menu hamburguesa, me costaba seleccionar las opciones y era porque el menu hamburguesa
    se superponia a las opciones. Esto pone encima del menu las opciones y ya no crea problema de usabilidad */}
    <nav id ="menu-movil" className={`absolute bg-[var(--color-secondary)] top-16 left-0 w-30 flex flex-col p-4 gap-4 md:hidden 
      transition-all z-50 ${open ? "block" : "hidden"}`} aria-label="Menú para móvil">
                <NavLink to="/" className="hover:underline" onClick={() => setOpen(false)} >Inicio</NavLink>
                <NavLink to="/listaDeProductos"  className="hover:underline" onClick={() => setOpen(false)}>Nuestras velas</NavLink>
                <NavLink to="/quienes"  className="hover:underline" onClick={() => setOpen(false)}>Quienes somos</NavLink>
                <NavLink to="/contacto"  className="hover:underline" onClick={() => setOpen(false)}>Contacto</NavLink>
                <NavLink to="/administracion"  className="hover:underline" onClick={() => setOpen(false)}>Administracion</NavLink>
            </nav>
    </header>

  );
}

export default Navbar;
