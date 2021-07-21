module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            zIndex: {
                100: 100,
                9999: 99999,
            },
            margin: {
                n50: '-50px',
            },
            colors: {
                bluebird: '#4A90E2',
            },
        },
        screens: {
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '640px',
            // => @media (min-width: 640px) { ... }

            lg: '768px',
            // => @media (min-width: 768px) { ... }

            xl: '1024px',
            // => @media (min-width: 1024px) { ... }

            '2xl': '1170px',
            // => @media (min-width: 1440px) { ... }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};