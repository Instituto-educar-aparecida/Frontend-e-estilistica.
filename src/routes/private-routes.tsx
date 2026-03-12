import { Route, Routes } from "react-router";
import { ProtectedRoute } from "./protect-route"; // nome correto
import { PrivateLayout } from "../layouts/private-layout";
("../layouts/private-layout"); // nome correto

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute>
            <PrivateLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<div>Página Privada</div>} />
        {/* ou */}
      </Route>
    </Routes>
  );
}
