/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // Adicione outras vars aqui
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
