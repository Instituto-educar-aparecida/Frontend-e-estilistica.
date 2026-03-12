import { RegisterForm } from "../components/register-form";
import AuthContainer from "../components/auth-container";
import FooterAuth from "../components/auth-footer";

export const RegisterPage = () => {
  return (
    <AuthContainer subtitle="Cadastre-se para acessar o portal do aluno">
      <RegisterForm />
      <FooterAuth link="/login" text="Já tem uma conta?" buttonText="Entrar" />
    </AuthContainer>
  );
};
