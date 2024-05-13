import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import typescript2 from 'rollup-plugin-typescript2';
import { babel } from '@rollup/plugin-babel';

export default {
    input: 'src/wrapper.js', // Path relative to package.json
    output: {
        name: 'EasyCheckbox',
        exports: 'named',
    },
    plugins: [
        typescript2({
            useTsconfigDeclarationDir: true,
            // tsconfigOverride: { // 是否覆盖 tsconfig.json 的设置
            //     compilerOptions: {
            //         declaration: false,
            //     }
            // }
        }),
        commonjs(),
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
        }),
        babel({
            babelHelpers: 'runtime',
            exclude: 'node_modules/**'
        }),
    ],
};