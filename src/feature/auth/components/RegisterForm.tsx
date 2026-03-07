// components/RegisterForm.tsx (Somente Estilização)
import React from "react";
import {
  MdPerson,
  MdEmail,
  MdLockOutline,
  MdPersonAdd,
  MdArrowForward,
} from "react-icons/md";
import { Input } from "../../../components/input";
import { useForm, FormProvider } from "react-hook-form";
import {
  registerDefaultValues,
  resolver,
  type RegisterFormData,
} from "../types/authSchema";
import { FaGraduationCap } from "react-icons/fa";
import { useRegister } from "../hooks/useRegister";

export const RegisterForm = () => {
  const registerMutation = useRegister();

  const methods = useForm<RegisterFormData>({
    resolver: resolver,
    defaultValues: registerDefaultValues,
  });

  const handleSubmit = (data: RegisterFormData) => {
    registerMutation.mutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-2 bg-primary bg-grid-pattern">
      <div className="w-full max-w-sm glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        {/* Background Blobs - MENOR */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-violet-400/10 blur-[50px] rounded-full sm:w-52 sm:h-52" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-violet-500/10 blur-[50px] rounded-full sm:w-52 sm:h-52" />

        <div className="relative z-10">
          {/* Header - MAIS COMPACTO */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 bg-linear-to-br from-violet-400 to-violet-500 rounded-xl flex items-center justify-center shadow-xl shadow-violet-900/30 mb-4">
              <FaGraduationCap className="text-white text-2xl" />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold tracking-tight text-white uppercase">
                Criar Conta
              </h1>
              <p className="text-gray-400 text-xs mt-1 font-medium">
                Crie sua conta no Portal
              </p>
            </div>
          </div>

          {/* Form - MAIS COMPACTO */}
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(handleSubmit)}
              className="space-y-4"
            >
              <Input
                name="name"
                label="Nome Completo"
                placeholder="Seu nome"
                icon={MdPerson}
              />

              <Input
                name="email"
                label="Email"
                type="email"
                placeholder="email@exemplo.com"
                icon={MdEmail}
              />

              {/* Password Group - COMPACTO */}
              <div className="space-y-4">
                <Input
                  name="senha"
                  label="Senha"
                  type="password"
                  placeholder="••••••••"
                  icon={MdLockOutline}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-violet-400 hover:bg-violet-500 disabled:opacity-50 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/20 transition-all duration-200 flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <span>Criar Conta</span>
                <MdArrowForward className="text-lg group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </FormProvider>
          {/* Footer - COMPACTO */}
          <div className="mt-6 pt-6 border-t border-white/10 ">
            <p className="text-xs text-gray-400 text-center">
              Já tem conta?{" "}
              <a
                href="#"
                className="text-violet-400 font-semibold hover:underline cursor-pointer"
              >
                Entrar
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
