import { Link, useParams } from 'react-router-dom';
import productos from "../data/productos.js";

/**
 * 
 * Componente DetalleProducto
 * 
 * Componente que nos va a mostrar toda la información que contiene el producto que seleccionemos
 * Necesario para cuando en una lista de productos no se muestra toda la información que tiene cada producto almacenada
 * 
 * @returns {JSX.Element}
 */
function DetalleProducto(){
    const {id} = useParams();


    // Busco el producto por su id
    const product = productos.find(p => p.id === Number(id));

    // Si el producto no existe, muestro un mensaje de error
    if(!product) {
        return(
            <main className='max-w-5xl mx-auto px-6 py-10 text-center'>
                <h1 className='text-xl'>Producto no encontrado</h1>
                <Link to="/listaDeProductos"
                className="inline-block mt-6 underline text-black">
                Volver a los productos
                </Link>            
            </main>
        )
    }

    return (
        <main className="max-w-5xl mx-auto px-6 py-10">
            <Link to="/listaDeProductos"
            className="inline-block mb-6 bg-[var(--color-secondary)] border-2 border-black p-2 rounded-2xl hover:underline">
                Volver a los productos
            </Link>

            <div className='flex flex-col md:flex-row gap-10'>
                <section className='flex flex-col items-center flex-1'>
                    <img
                        src={`/${product.image}`}
                        alt={product.name}
                        className='w-[300px] h-[300px] border-2 border-black p-2 object-contain rounded-2xl'
                    />

                    <h1 className='text-3xl pt-6 mb-4 text-[#674835]'>{product.name}</h1>
                    <p className='text-xl font-bold mb-4'>{product.price}</p>
                    <button className='bg-[var(--color-primary)] text-white border-2 border-black px-6 py-2 rounded-2xl'>
                        Agregar al carrito
                    </button>
                </section>

                <section className='flex-1'>
                    <h2 className='bg-[var(--color-secondary)] border-2 rounded-2xl text-2xl mb-4 text-[#674835]'>Descripción del producto</h2>
                    <p className='bg-[var(--color-secondary)] border-1 rounded-1xl text-lg'>{product.description}</p>
                </section>
            </div>
        </main>
    )
}

export default DetalleProducto;
