import { useMutation } from "@tanstack/react-query";
import { api } from "../../../lib/axios";

export function useLogin() {
  return useMutation({
    mutationFn: async (data: any) => {
      // Chama a rota de login que ajustamos com bcrypt e Postgres
      const response = await api.post("/api/auth/login", data);
      return response.data;
    },
    onSuccess: (data) => {
      // Se o login der certo (auth: true), salva o Token JWT
      localStorage.setItem('jwt_token', data.token);
      
      // Usa a ROLE que o seu Backend envia para decidir a rota
      if (data.role === 'aluno') {
        window.location.href = '/aluno';
      } else {
        window.location.href = '/dashboard';
      }
    }
  });
}

