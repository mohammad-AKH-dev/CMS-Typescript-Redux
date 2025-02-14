/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   
  theme: {
	container: {
		center: true,
		padding: '1rem'
	},
  	extend: {
  		screens: {
			xsm: '400px',
  			sm: '480px',
  			md: '768px',
  			lg: '976px',
			xl: '1200px',
  			"2xl": '1440px'
  		},
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
			 
        title: '#FFFFFF',
  			subtitle: '#AEB9E1',
  			selected: '#CB3CFF',
			textPending: '#FDB52A',
			textSuccess: '#14CA74',
			textError: '#FF5A65',
  			pending: '#FDB52A',
  			icon: '#AEB9E1',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderColor: {
  			primary: '#343B4F',
  			default: '#0B1739'
  		},
  		backgroundColor: {
  			'primary': '#081028',
  			'box': '#0B1739',
  			link: '#0A1330',
  			input: '#0B1739',
			pending: 'rgba(255, 176, 22, 0.2)',
			success: 'rgba(5, 193, 104, 0.2)',
  			error: 'rgba(255, 90, 101, 0.2)',
  		},
  		fontFamily: {
  			'title': 'medium',
  			'text': 'semi-bold'
  		},
  		boxShadow: {
  			'sidebar': '0px 4px 14px rgba(0, 0, 0, 0.25)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}