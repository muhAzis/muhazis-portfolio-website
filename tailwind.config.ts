import type { Config } from "tailwindcss";
import "tailwindcss-animate";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		animation: {
  			hover: 'hover 4s infinite',
        marquee: 'marquee 10s infinite linear'
  		},
  		colors: {
  			white: '#F6F6F6',
  			black: '#453E39',
  			twilight: {
  				'50': '#E5E5F9',
  				'100': '#C7C8F1',
  				'200': '#A5A6E8',
  				'300': '#8284E0',
  				'400': '#6264D9',
  				'500': '#5254D2',
  				'600': '#4747C2',
  				'700': '#3C3BA3',
  				'800': '#303083',
  				'900': '#232364'
  			},
  			crimson: {
  				'50': '#F9E5E5',
  				'100': '#F1C7C7',
  				'200': '#E8A5A5',
  				'300': '#E08282',
  				'400': '#D95F5F',
  				'500': '#D03F3F',
  				'600': '#C23939',
  				'700': '#A33333',
  				'800': '#832B2B',
  				'900': '#632121'
  			},
  			golden: {
  				'50': '#FFF1E7',
  				'100': '#FCDCC5',
  				'200': '#F8C4A0',
  				'300': '#F4AB7A',
  				'400': '#F0925A',
  				'500': '#E8924C',
  				'600': '#D27D43',
  				'700': '#B5673A',
  				'800': '#944F2F',
  				'900': '#713B24'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
