import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts", // Entry point for your package
  output: {
    file: "dist/index.js",
    format: "cjs", // CommonJS format
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }), // Integrating TypeScript
  ],
  external: ["react", "react-dom"], // Treat these as external
};
