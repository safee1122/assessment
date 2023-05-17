import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("token");
  const userInfo = localStorage.getItem("userInfo");
  if (!token || !userInfo) {
    return <Navigate to={"/login"} replace />;
  } else return children;
};

export default ProtectedRoute;
