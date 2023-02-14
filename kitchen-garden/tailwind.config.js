const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
        fontSize: {
            sm: ['13px', '20px'],
            base: ['16px', '22px'],
            lg: ['18px', '28px'],
            xl: ['22px', '32px'],
            '2xl': ['25px', '34px'],
        },
        colors: {
        white: '#ffffff',
        black: '#000000',
        gray: {
            100:'#DFDFDF'
        },
        green: {
                100: '#e5f4f3',
                600: '#009688',
                900: '#2C7420'
            },
        },
        fontFamily: {
            body: [
              'YuGothic',
              'Yu Gothic',
              'Hiragino Sans',
              'ヒラギノ角ゴシック',
              'sans-serif',
            ],
          },
    },

    plugins: [require('@tailwindcss/forms')],
};
