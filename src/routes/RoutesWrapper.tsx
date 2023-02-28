import { Navigate, Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/Error";
import TodosPage from "../pages/Todos";

const RoutesWrapper: React.FC = () => (
  <Routes>
    <Route
      path="/"
      element={<Navigate to="/todos" />}
      errorElement={<ErrorPage />}
    />
    <Route path="/todos" element={<TodosPage />} />
  </Routes>
);

export default RoutesWrapper;
