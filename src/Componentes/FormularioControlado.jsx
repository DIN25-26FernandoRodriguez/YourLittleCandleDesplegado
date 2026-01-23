import { useState } from "react";


/**
 * Componente FormularioControlado
 * 
 * Formulario controlado para poder añadir productos al catálogo de la página.
 * Gestiona el estado de cada uno de los campos que el usuario tiene que rellenar para poder crear el producto.
 * Valida que los campos necesarios esten correctamente rellenados.
 * 
 * @component
 * @returns {JSX.Element}
 */
const formularioInicial = {
    nombre: "",
    descripcion: "",
    categoria: "",
    precio: "",
    imagen: ""
}

function FormularioControlado(){
    const [formData, setFormData] = useState(formularioInicial)
    const [error, setError] = useState({
        nombre: "",
        descripcion: "",
        categoria: "",
        precio: "",
        imagen: ""
    })

    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormData((prev) => ({...prev, [id]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = {};
        const precio = Number(formData.precio)

        if (formData.nombre.trim() === "") newErrors.nombre = "Debes introducir un nombre para el producto"
        if (formData.descripcion.trim() === "") newErrors.descripcion = "Debes introducir una descripción del producto"
        if(!formData.categoria) newErrors.categoria = "Debes seleccionar una categoria"
        if (!precio || precio <=0) newErrors.precio = "Debes introducir un precio valido para el producto" 
        if (!formData.imagen.startsWith("http")) newErrors.imagen = "Debes introducir una URL válida para la imagen"

        setError(newErrors)

        if(Object.keys(newErrors).length === 0){
            alert("Formulario válido. Producto añadido")
            setFormData(formularioInicial)
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-[var(--color-secondary)] p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white border p-6 rounded-lg shadow-md w-full max-w-md"
                noValidate
            >
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
                    Añadir nuevo producto
                </h2>

                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-gray-700 font-semibold mb-2">
                        Nombre del producto
                    </label>
                    <input
                        id="nombre"
                        type="text"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {error.nombre && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error.nombre}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="descripcion" className="block text-gray-700 font-semibold mb-2">
                        Descripcion del producto
                    </label>
                    <textarea
                        id="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {error.descripcion && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error.descripcion}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="categoria" className="block text-gray-700 font-semibold mb-2">
                        Categoria del producto
                    </label>
                    <select
                        id="categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    <option value="">Selecciona una opcion</option>
                    <option value="velas-aroma">Velas con aroma</option>
                    </select>
                    {error.categoria && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error.categoria}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="precio" className="block text-gray-700 font-semibold mb-2">
                        Precio del producto
                    </label>
                    <input
                        id="precio"
                        type="number"
                        value={formData.precio}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {error.precio && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error.precio}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="imagen" className="block text-gray-700 font-semibold mb-2">
                        Imagen del producto
                    </label>
                    <input
                    id="imagen"
                    type="text"
                    value={formData.imagen}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {error.imagen && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error.imagen}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-[var(--color-secondary)] border text-black py-2 px-4 rounded-lg font-semibold hover:bg-amber-950 focus:outline-none focus:ring-4 focus:ring-amber-700 transition duration-150"
                >
                    Añadir producto
                </button>    
            </form>
        </div>
    )
}

export default FormularioControlado