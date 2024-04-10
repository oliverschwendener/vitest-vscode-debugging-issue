import { join } from "path";
import { defineConfig } from "vite";

export default defineConfig(() => {
    return {
        root: join(__dirname, "src"),
        build: {
            outDir: join(__dirname, "dist"),
            sourcemap: true,
        },
        server: (() => ({
            host: "127.0.0.1",
            port: 7777,
        }))(),
        test: {
            root: "src",
        },
    };
});
