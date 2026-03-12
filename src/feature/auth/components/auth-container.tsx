import type React from "react";
import HeaderAuth from "./auth-header";

export interface IAuthContainer {
  children: React.ReactNode;
  subtitle: string;
}

export default function AuthContainer({ children, subtitle }: IAuthContainer) {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 sm:p-2 bg-primary bg-grid-pattern">
      <div className="w-full max-w-sm glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        {/* Background*/}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-violet-400/10 blur-[50px] rounded-full sm:w-52 sm:h-52" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-violet-500/10 blur-[50px] rounded-full sm:w-52 sm:h-52" />

        <div className="relative z-10">
          <HeaderAuth subtitle={subtitle} />
          {children}
        </div>
      </div>
    </main>
  );
}
