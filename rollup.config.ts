import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import { RollupOptions } from 'rollup';

const config: RollupOptions = {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'iife',
    },
    plugins: [
        terser(),
        typescript(),
    ],
};

export default config;
