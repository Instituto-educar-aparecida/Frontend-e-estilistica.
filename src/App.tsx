import { BrowserRouter } from "react-router";
import { LoginPage } from "./feature/auth/pages/login-page";
import AppRoutes from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
