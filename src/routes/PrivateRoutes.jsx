import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRoute = ({ children }) => {
  const { userLogged } = useContext(UserContext);
  return userLogged ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
