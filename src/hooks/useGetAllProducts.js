import { getProductos } from "../services/productosService";
import { useEffect, useRef, useState } from "react";

export const useProductos = () => {
    const fetched = useRef(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(fetched.current) return;
        fetched.current = true;

        const fetchProducts = async () => {
            try{
                const res = await getProductos();
                setData(res)
            }catch{
                setError("No se ha encontrado ningún producto")
            } finally{
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return {data, loading, error};

}

