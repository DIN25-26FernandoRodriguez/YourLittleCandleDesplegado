import axios from "axios";
API_URL = "https://api-productos-mongodb-oh06.onrender.com/productos"



const mapProductoFromAPI = (data) => ({
    id : data._id,
    nombre : data.name,
    descripcion : data.description,
    categoria : data.category,
    imagen : data.photo
})

export const createProduct = async (product) => {
    try{
        const resultado = await axios.post(API_URL, product)
        return mapProductoFromAPI(resultado.data.data ?? resultado.data)
    } catch(error){
        console.error("qowoeijqwe")
        throw new Error(error.response?.data?.message || "uiqghwiue")
    }
}

export const getProducts = async () => {

    try {
        const resultado = await axios.get(API_URL)
        return resultado.data.data.map(mapProductoFromAPI)
    } catch(error){
        console.error("qwiueqweqw")
        throw new Error(error.response?.data?.message || "nq1o2e")
    }
}

export const getProductById = async (id) => {

    try{

        const producto = await axios.get(`${API_URL}/${id}`)
        if(!producto) {
            console.log("No se ha encontrado el producto")
            return
        } else {
            return mapProductoFromAPI(producto.data.data ?? producto.data)
        }
    } catch(error){
        console.error("nio1bh23ui123")
        throw new Error(error.response?.data?.message || "iuqgbhweqwe")
    }
}

export const deleteProduct = async (id) => {
    try{
        const producto = await axios.get(`${API_URL}/${id}`)
        if(!producto){
            console.log("Producto no encontrado")
            return
        } else {
            await axios.delete(producto)
        }
    } catch(error){
        console.error("ioqhnweqwe")
        throw new Error(error.response?.data?.message ||"1hu23iu1i23")
    }
}