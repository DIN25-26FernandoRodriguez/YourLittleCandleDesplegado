import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { deleteProduct, getProductById } from '../services/productosService.js';
import { useEffect } from 'react';
import { useProductById } from '../hooks/useGetProductById.js';

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
    const navigate = useNavigate();

    const {product : vela, loading, error } = useProductById(id)


    // Boton eliminar
    const handleDelete = async () => {
        const confirmDelete = window.confirm("Seguro?")
        if(!confirmDelete) return;

        try {
            await deleteProduct(vela.id)
            alert("Producto eliminado correctamente")
            navigate("/listaDeProductos");
        } catch(error){
            alert("Error al eliminar el productio: " + error.message)
        }
    }
     

    if(loading) return <p className='p-4'>Cargando producto...</p>
    if (error) return <p className='p-4 text-red-600'>{error}</p>

    return (
        <main className="max-w-5xl px-6 py-10 mx-auto">
            <Link to="/listaDeProductos"
            className="inline-block mb-6 bg-[var(--color-secondary)] border-2 border-black p-2 rounded-2xl hover:underline">
                Volver a los productos
            </Link>

            <div className='flex flex-col gap-10 md:flex-row'>
                <section className='flex flex-col items-center flex-1'>
                    <img
                        src={vela.imagen}
                        alt={vela.nombre}
                        className='w-[300px] h-[300px] border-2 border-black p-2 object-contain rounded-2xl'
                    />

                    <h1 className='text-3xl pt-6 mb-4 text-[#674835]'>{vela.nombre}</h1>
                    <p className='mb-4 text-xl font-bold'>{vela.precio}</p>
                    <button className='bg-[var(--color-primary)] text-white border-2 border-black px-6 py-2 rounded-2xl'>
                        Agregar al carrito
                    </button>
                    <button
                    onClick={handleDelete}
                    className='px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700'
                    >
                        Eliminar
                    </button>
                </section>

                <section className='flex-1'>
                    <h2 className='bg-[var(--color-secondary)] border-2 rounded-2xl text-2xl mb-4 text-[#674835]'>Descripción del producto</h2>
                    <p className='bg-[var(--color-secondary)] border-1 rounded-1xl text-lg'>{vela.descripcion}</p>
                </section>
            </div>
        </main>
    )
}

export default DetalleProducto;
