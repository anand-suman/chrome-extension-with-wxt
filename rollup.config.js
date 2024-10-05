import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default defineConfig({
    input: 'src/background.js',  // Your entry file
    output: {
        file: 'dist/background.js',  // Output file
        format: 'esm',  // Use 'esm' format
    },
    plugins: [
        resolve(),
        commonjs(),
        terser() // Optional: to minify the output
    ],
});
