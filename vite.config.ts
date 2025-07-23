import wasm from "vite-plugin-wasm";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default {
  base: "Haruhikage",
  build: {
    target: ["esnext"],
  },
  plugins: [
    wasm(),
    viteStaticCopy({
      targets: [
        {
          src: "./src/assets/*",
          dest: "assets",
        },
      ],
    }),
  ],
};
