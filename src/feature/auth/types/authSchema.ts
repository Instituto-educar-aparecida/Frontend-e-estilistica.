import * as z from "zod";

export const loginSchema = z.object({});

export type LoginSchema = z.infer<typeof loginSchema>;

export const RegisterSchema = z.object({});

export type RegisterSchema = z.infer<typeof RegisterSchema>;
