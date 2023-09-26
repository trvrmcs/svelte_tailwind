/** @type {import('tailwindcss').Config} */
export default {
    content: ['index.html', 'src/**/*.{svelte,ts}'],

    theme: {
        extend: {
            colors: {
                fiord: {
                    '50': '#f5f8fa',
                    '100': '#eaeff4',
                    '200': '#d1dde6',
                    '300': '#a9bfd0',
                    '400': '#7b9db5',
                    '500': '#5a829d',
                    '600': '#466883',
                    '700': '#3d5970',
                    '800': '#334859',
                    '900': '#2e3e4c',
                    '950': '#1f2832',
                },


            }
        },
    },

}



