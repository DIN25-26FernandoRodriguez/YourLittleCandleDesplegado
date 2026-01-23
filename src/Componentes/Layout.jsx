
/**
 * 
 * Componente Layout
 * 
 * Componente que va a envolver todo el contenido que se va a ver en la pantalla del navegador.
 * Representa el lienzo donde vamos a dibujar todo lo que queremos que se muestre en la pantalla
 * 
 * @param {*} param0 
 * @returns {JSX.Element}
 */
function Layout({ children }) {
  return (
    <main
      id="main-content"
      tabIndex="-1"
      className="min-h-screen bg-linear-to-bg-br flex flex-col items-center p-8"
    >
      <section aria-labelledby="main-section-title" className="w-full max-w-7xl text-center">
        {children}
      </section>
    </main>
  );
}

export default Layout
