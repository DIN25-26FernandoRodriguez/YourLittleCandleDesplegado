import { Routes, Route } from "react-router-dom";

import Inicio from "../Pages/Inicio";
import ListarProductos from "../Pages/listaDeProductos";
import DetalleProducto from "../Pages/DetalleProducto";
import WorkInProgress from "../Pages/WorkInProgress";
import Administracion from "../Pages/Administracion";
import FormularioControlado from "../Componentes/FormularioControlado";
import PrivateRoute from "./PrivateRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/listaDeProductos" element={<ListarProductos />} />
      <Route path="/producto/:id" element={<DetalleProducto />} />
      <Route path="/contacto" element={<WorkInProgress />} />
      <Route path="/quienes" element={<WorkInProgress />} />
      <Route path="/redes" element={<WorkInProgress />} />
      <Route path="/ubicacion" element={<WorkInProgress />} />

      <Route
        path="/administracion"
        element={
          <PrivateRoute>
            <Administracion />
          </PrivateRoute>
        }
      >
        <Route index element={<FormularioControlado />} />
        <Route path="formulario" element={<FormularioControlado />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
