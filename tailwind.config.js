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
                humanSkin: '#EBEBEB',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};