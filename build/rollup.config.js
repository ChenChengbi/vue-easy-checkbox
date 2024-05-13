import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from '@rollup/plugin-buble'; // Transpile/polyfill with reasonable browser support
import typescript2 from 'rollup-plugin-typescript2';

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
        buble({
            objectAssign: true,
            transforms: {
                asyncAwait: false,
                forOf: false,
            }
        }), // Transpile to ES5
    ],
};