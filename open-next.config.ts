import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Configuración por defecto: suficiente para una web estática/SSR sin caché externa.
// Aquí se activaría R2/KV para ISR si en el futuro hiciera falta.
export default defineCloudflareConfig({});
