import preact from '@preact/preset-vite'
import { defineConfig } from 'vite'
import monkey, { cdn } from 'vite-plugin-monkey'
import packageJson from './package.json' with { type: 'json' }

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        preact({
            devToolsEnabled: false,
            devtoolsInProd: false,
        }),
        monkey({
            entry: 'src/main.tsx',
            userscript: {
                'name': {
                    '': packageJson.title,
                    'zh-CN': packageJson['title:zh-CN'],
                    'zh-TW': packageJson['title:zh-TW'],
                },
                'author': packageJson.author,
                'namespace': packageJson.author,
                'description': {
                    '': packageJson.description,
                    'zh-CN': packageJson['description:zh-CN'],
                    'zh-TW': packageJson['description:zh-TW'],
                },
                'license': packageJson.license,
                'match': [
                    'https://chat.deepseek.com/*',
                ],
                'exclude': [
                    'https://chat.deepseek.com/sign_in*',
                ],
                'icon': 'https://chat.deepseek.com/favicon.svg',
                'run-at': 'document-end',
            },
            build: {
                fileName: 'deepseek.user.js',
                externalGlobals: [
                    // JSZip 3.10.1's setImmediate polyfill hangs in a granted
                    // Tampermonkey sandbox. Keep 3.9.1 pinned until upstream
                    // fixes https://github.com/Stuk/jszip/issues/934.
                    ['jszip', cdn.jsdelivr('JSZip', 'dist/jszip.min.js')],
                    ['html2canvas', cdn.jsdelivr('html2canvas', 'dist/html2canvas.min.js')],
                ],
            },
            server: {
                open: true,
            },
        }),
    ],
    build: {
        cssMinify: false,
    },
})
