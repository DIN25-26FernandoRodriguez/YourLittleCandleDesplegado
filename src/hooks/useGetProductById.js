import { useState } from "react";
import { getProductById } from "../services/productosService";
import { useRef } from "react";
import { useEffect } from "react";

export const useProductById = (id)  => {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {


        const loadData = async () => {
            try{
                setLoading(true);
                const data = await getProductById(id);
                if(data) {
                    setProduct(data);
                } else {
                    setError(`No se ha encontrado el producto con el id ${id}`)
                }
            } catch {
                setError("Fallo an conectar a la base de datos")
            } finally {
                setLoading(false)
            }
        }

        loadData();
    }, [id])

    return {product, loading, error}



}