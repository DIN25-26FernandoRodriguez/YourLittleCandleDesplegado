import { Link, useParams } from 'react-router-dom';
import productos from './productos';

function DetalleProducto({ product }) {
  if (!product) {
    return <h1>Producto no encontrado</h1>;
  }

  return (
    <main style={{ maxWidth: "800px", margin: "auto" }}>
      <h1>{product.name}</h1>
      <img
        src={`/${product.image}`}
        alt={product.name}
        width="300"
      />
      <p><strong>{product.price}</strong></p>
      <p>{product.description}</p>
      <button>Agregar</button>
    </main>
  );
}

export default DetalleProducto;
