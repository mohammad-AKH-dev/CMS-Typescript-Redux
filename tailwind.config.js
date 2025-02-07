/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        primary: '#ffffff',
        subtitle: '#AEB9E1',
        selected: '#CB3CFF',
        success: '#14CA74',
        error: '#FF5A65',
        pending: '#FDB52A',
        icon: '#AEB9E1'
      },
      borderColor: {
        primary: '#343B4F'
      },
      backgroundColor: {
        "primary": '#081028',
        "box": '#0B1739',
        'link': '#0A1330',
        'input': '#0B1739'
      },
      fontFamily: {
        "title": 'medium',
        "text" : 'semi-bold'
      },
      boxShadow: {
        "sidebar": '0px 4px 14px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}