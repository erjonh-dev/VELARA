/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_URL: string;
}

// Estensione diretta dell'interfaccia ImportMeta
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
