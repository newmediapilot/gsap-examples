import {defineConfig} from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/gsap-examples/',
    server: {
        port: 1234,
    },
    plugins: [
        tailwindcss(),
    ],
})