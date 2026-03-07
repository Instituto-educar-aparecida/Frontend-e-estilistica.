import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const RegisterSchema = z.object({
  name: z
    .string()
    .min(1, "Nome é obrigatório")
    .max(45, "Nome deve ter no máximo 45 caracteres"),
  email: z.email("Email inválido"),
  senha: z.string().min(8, "Senha deve ter no mínimo 8 caracteres"),
  role: z.enum(["admin", "aluno"]),
});

export type RegisterFormData = z.infer<typeof RegisterSchema>;
export const resolver = zodResolver(RegisterSchema);
export const registerDefaultValues: RegisterFormData = {
  name: "",
  email: "",
  senha: "",
  role: "aluno",
};
