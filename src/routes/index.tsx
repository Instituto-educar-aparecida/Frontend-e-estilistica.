import { Route, Routes } from "react-router";
import PublicRoutes from "./public-routes";
import PrivateRoutes from "./private-routes";

export default function AppRoutes() {
  // ← Sem prop
  return (
    <Routes>
      <Route path="/*" element={<PublicRoutes />} />
      <Route path="/app/*" element={<PrivateRoutes />} />
    </Routes>
  );
}
