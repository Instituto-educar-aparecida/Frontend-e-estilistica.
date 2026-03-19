import { useMutation } from "@tanstack/react-query";
import { api } from "../../../lib/axios";
import type { LoginFormData } from "../types/authSchema";

interface LoginResponse {
  msg: string;
  accessToken: string;
  refreshToken: string;
}

export function useLogin() {
  return useMutation({
    mutationFn: async (data: LoginFormData): Promise<LoginResponse> => {
      const response = await api.post<LoginResponse>("/auth/login", data);
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("auth_token", data.msg);
      console.log("Login realizado com sucesso", data.msg);
    },
    onError: (error: any) => {
      console.log(error);
    },
  });
}
