import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {

        extend: {
            colors: {
                'primary': '#21999A', // some dark color
                'secondary': '#BCF9C8', // some grayish color
                'dark': '#194C6D', // some grayish color
                'dark2': '#143B55',
                'highlight1': '#BCF9C8', // some grayish color
                'highlight2': '#6AEB93', // some grayish color
                'white': '#f8fafc'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar'),

    ],
}
export default config
