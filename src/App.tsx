import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RegisterForm } from './feature/auth/components/RegisterForm'; 
import { LoginForm } from './feature/auth/components/LoginForm'; 
import { AdminLogin } from './feature/auth/components/AdminLogin';


export default function App() {
  return (
    <Router>
      <Routes>
        {/* Rota de Entrada (Login) */}
        <Route path="/" element={<LoginForm/>} />
        
        {/* Rota de Cadastro (O que você acabou de importar) */}
        <Route path="/register" element={<RegisterForm />} />
        
        {/* Rota do Aluno */}
        <Route path="/aluno" element={<h1>Área do Aluno</h1>} />
        
        {/* Rota do Admin/login */}
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

