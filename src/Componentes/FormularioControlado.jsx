import { useState } from "react";

function FormularioControlado() {


    const [error, setError] = useState({
        nombre: "",
        descripcion: "",
        categoria: "",
        price: "",
        image: ""
    })

    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        categoria: "",
        price: "",
        image: ""
    })

    const handleChange = (e) => {
        console.log(formData)

        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {}

        const precio = Number(formData.price)

        if(formData.nombre == ""){
            newErrors.nombre = ("Debes introducir un nombre para el artículo")
        }
        if(formData.descripcion == ""){
            newErrors.descripcion = ("Debes introducir una descripción para el artículo")
        }
        if(!formData.categoria){
            newErrors.categoria = ("Debes seleccionar una categoria para el artículo")
        }
        if(!precio || formData.price <= 0){
            newErrors.price = ("Debes introducir un precio válido")
        }
        if(!formData.image.startsWith("http")){
            newErrors.image = ("Debes introducir una url válida")
        }

        setError(newErrors)

        if (Object.keys(newErrors).length === 0) {
            alert("Formulario válido..")
        }


    };


    return (


        <div>

            <div className="relative flex justify-center border rounded-2xl items-center min-h-screen bg-[var(--color-secondary)] p-4">

                <form
                    onSubmit={handleSubmit}
                    className="bg-white border p-6 rounded-lg shadow-md w-full max-w-md"
                    noValidate
                >
                    <div className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
                        Añadir producto (Controlado)
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="nombre"
                            className="block text-gray-700 font font-semibold mb-2"
                        >
                            Nombre del artículo
                        </label>
                        <input
                            id="nombre"
                            type="text"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></input>
                        <div>
                            {error.nombre && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error.nombre}</p>}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="descripcion"
                            className="block text-gray-700 font font-semibold mb-2"
                        >
                            Descripción del artículo
                        </label>
                        <textarea
                            id="descripcion"
                            type="text"
                            value={formData.descripcion}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        <div>
                            {error.descripcion && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error.descripcion}</p>}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="categoria"
                            className="block text-gray-700 font font-semibold mb-2"
                        >
                            Categoria del artículo
                        </label>
                        <select
                            id="categoria"
                            type="text"
                            value={formData.categoria}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="" alt="opcion1">Selecciona una opción</option>
                            <option value="opcion2" alt="opcion2">Velas con aroma</option>
                            <option value="opcion3" alt="opcion3">Velas sin aroma</option>
                        </select>
                        <div>
                            {error.categoria && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error.categoria}</p>}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="price"
                            className="block text-gray-700 font font-semibold mb-2"
                        >
                            Precio del artículo
                        </label>
                        <input
                            id="price"
                            type="number"
                            value={formData.price}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                        </input>
                        <div>
                            {error.price && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error.price}</p>}
                        </div>
                    </div>

                                        <div className="mb-4">
                        <label
                            htmlFor="image"
                            className="block text-gray-700 font font-semibold mb-2"
                        >
                            Imagen del artículo
                        </label>
                        <input
                            id="image"
                            type="text"
                            value={formData.image}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                        </input>
                        <div>
                            {error.image && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error.image}</p>}
                        </div>
                    </div>

                    <button
                    type="submit"
                    className="w-full bg-[var(--color-secondary)] border text-black py-2 px-4 rounded-lg font-semibold hover:bg-amber-950 focus:outline-none focus:ring-4 focus:ring-amber-700 focus:ring-opacity-50 transition duration-150 ease-in-out"
                >
                    Añadir producto
                </button>

                </form>
            </div>


        </div>



    )


}

export default FormularioControlado