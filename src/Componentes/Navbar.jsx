import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";


/**
 * 
 * Componente Navbar
 * 
 * Componente que va a controlar y mostrar las diferentes páginas que la web contiene
 * Mediante el Navbar mostraremos al usuario las opciones de navegación que tiene
 * Se mantendrá siempre a la vista para que el usuario pueda redirigirse en cualquier momento
 * 
 * @returns {JSX.Element}
 */
function Navbar() {
  const [open, setOpen] = useState(false);
  const { userLogged, login, logout } = useContext(UserContext);
  return (

    // Contenedor principal de la barra de navegación
    <header className="relative w-full bg-[var(--color-secondary)] p-4 shadow-md">



      {/* Navegación para pantallas medianas y grandes */}
      <nav
        className="justify-center flex-1 hidden gap-8 text-lg md:flex" aria-label="Barra de navegación">
          <div className="flex gap-8">
        <Link to="/">Inicio</Link>
        <Link to="/listaDeProductos">Nuestras velas</Link>
        <Link to="/quienes">Quienes somos</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/administracion">Administracion</Link>
        </div>
        {/* Botón de login/logout */}
        {!userLogged ? (
          <button
            onClick={login}
            className="px-4 py-2 bg-[var(--color-primary)] text-white rounded hover:opacity-90"
          >
            Iniciar sesión
          </button>
        ) : (
          <button
            onClick={logout}
            className="px-4 py-2 text-white bg-red-500 rounded hover:opacity-90"
          >
            Cerrar sesión
          </button>
        )}
      </nav>

      {/* Configuración para esconder el boton hamburguesa en pantallas medianas y grandes*/}
      <button onClick={() => setOpen(!open)} className="text-2xl md:hidden" aria-label="Menú hamburguesa"
        aria-expanded={open} aria-controls="menu-movil">☰</button>

      {/* Configuración para que el menu hamburguesa se vea solamente en pantallas pequeñas*/}
      {/* Le he tenido que configurar z-50 porque cuando abria el menu hamburguesa, me costaba seleccionar las opciones y era porque el menu hamburguesa
    se superponia a las opciones. Esto pone encima del menu las opciones y ya no crea problema de usabilidad */}
      <nav id="menu-movil" className={`absolute bg-[var(--color-secondary)] top-16 left-0 w-30 flex flex-col p-4 gap-4 md:hidden 
      transition-all z-50 ${open ? "block" : "hidden"}`} aria-label="Menú para móvil">
        <NavLink to="/" className="hover:underline" onClick={() => setOpen(false)} >Inicio</NavLink>
        <NavLink to="/listaDeProductos" className="hover:underline" onClick={() => setOpen(false)}>Nuestras velas</NavLink>
        <NavLink to="/quienes" className="hover:underline" onClick={() => setOpen(false)}>Quienes somos</NavLink>
        <NavLink to="/contacto" className="hover:underline" onClick={() => setOpen(false)}>Contacto</NavLink>
        <NavLink to="/administracion" className="hover:underline" onClick={() => setOpen(false)}>Administracion</NavLink>
      </nav>
    </header>

  );
}

export default Navbar;
