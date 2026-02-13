import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                Secundary: '#f57421c',
                Darkbg: '#11424',

            },
            backgroundImage: {
                "gradient-cover": 
                    "linear-gradient(90.21deg, rgba(70, 54, 124,0.5)-5.95%, rgba(74, 47, 189, 0.5)111.54%)",
                
            },
        },
    },
    plugins: [],
}   

export default config   