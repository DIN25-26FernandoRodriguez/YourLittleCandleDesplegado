import axios from 'axios';
// const API_URL = import.meta.env.VITE_API_URL + '/productos';
const API_URL = 'https://api-productos-mongodb-oh06.onrender.com/productos'

const mapProductoFromAPI = (producto) => ({
    id: producto._id,
    nombre: producto.name,
    descripcion: producto.description,
    categoria: producto.category,
    precio: producto.price,
    imagen: producto.photo,
});

// Llamada para crear un nuevo producto en la API
export const createProduct = async (data) => {
   try {
        // Mapeamos los datos que vienen del formulario (español) 
        // a lo que la API espera recibir (inglés)
        const newProduct = {
            name: data.nombre,
            description: data.descripcion,
            category: data.categoria,
            price: Number(data.precio), // Aseguramos que sea número
            photo: data.imagen,
        }; 

        console.log("Enviando a la API:", newProduct); // Útil para depurar
        const res = await axios.post(API_URL, newProduct);
        return mapProductoFromAPI(res.data.data ?? res.data);
    } catch (error) {
        console.error("Fallo al crear el producto", error);
        throw new Error(error.response?.data?.message || "No se ha podido crear el producto.");
    }
};


// Llamada para obtener toda la lista de productos
export const getProductos = async () => {
    try {
        const res = await axios.get(API_URL)
        return res.data.data.map(mapProductoFromAPI);
    } catch (error) {
        console.error("Error al obtener los productos", error)
        throw new Error(error.response?.data?.message || "No se ha podido cargar la lista de productos")
    }
};

// Llamada para obtener un producto por un ID
export const getProductById = async (id) => {
    try {
        const res = await axios.get(`${API_URL}/${id}`);
        return mapProductoFromAPI(res.data.data ?? res.data);
    } catch (error) {
        console.error(`No se ha encontrado ningún producto con el id ${id}`, error)
        throw new Error(error.response?.data?.message || "No se ha encontrado el producto");
    }
};


export const deleteProduct = async (id) => {
    try{
        await axios.delete(`${API_URL}/${id}`)
    } catch(error){
        console.error("qwuiheuqghwio9ueho90qwheo9uhqwioèjiopqwjnbriupqwebip`rthnq`woer")
        throw new Error(error.response?.data?.message || "iu12ghi8o8p3gh8012uyg378012gh39u12312")
    }
}