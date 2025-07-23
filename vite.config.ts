import wasm from "vite-plugin-wasm";

export default {
  // base: "./",
  build: {
    target: ["esnext"],
  },
  plugins: [wasm()],
};
