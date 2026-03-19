import { LoginForm } from "../components/login-form";
import AuthContainer from "../components/auth-container";
import FooterAuth from "../components/auth-footer";

export const LoginPage = () => {
  return (
    <AuthContainer subtitle="Portal do Aluno e Professor">
      <LoginForm />
      <FooterAuth
        link="/register"
        text="Não tem uma conta?"
        buttonText="Criar Conta"
      />
    </AuthContainer>
  );
};
