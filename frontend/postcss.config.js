
import tailwindConfig from './tailwind.config.js'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
export default {
    plugins: [tailwind(tailwindConfig), autoprefixer]
}



