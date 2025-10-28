import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return defineConfig({
    plugins: [
      react({
        // ativa overlay de erro como no CRA
        fastRefresh: true,
        errorOverlay: true,
      }),
    ],
    server: {
      port: parseInt(env.VITE_PORT) || 5173,
      open: true,
    },
  });
};
