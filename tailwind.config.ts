import type { Config } from "tailwindcss";
// import defaultTheme from 'tailwindcss/defaultTheme'; // Make sure this is imported if used

const config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
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
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
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
  			'brand-highlight': 'hsl(var(--brand-highlight))', // Added brand-highlight
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      // Add font families here
      fontFamily: {
        // Keep existing sans, serif, mono if they were defined, or rely on Tailwind defaults
        // Add custom font families for accessibility options
        // Ensure these keys match the class names generated in accessibility-controls.tsx
        arial: ['Arial', 'Helvetica', 'sans-serif'],
        'times-new-roman': ['Times New Roman', 'Times', 'serif'],
        'courier-new': ['Courier New', 'Courier', 'monospace'],
        georgia: ['Georgia', 'serif'],
        verdana: ['Verdana', 'Geneva', 'sans-serif'],
        garamond: ['Garamond', 'serif'],
        helvetica: ['Helvetica', 'Arial', 'sans-serif'], // Explicit Helvetica
        'comic-sans': ['Comic Sans MS', 'cursive', 'sans-serif'],
        impact: ['Impact', 'Charcoal', 'sans-serif'],
        'lucida-console': ['Lucida Console', 'Monaco', 'monospace'],
        palatino: ['Palatino Linotype', 'Book Antiqua', 'Palatino', 'serif'],
        tahoma: ['Tahoma', 'Geneva', 'sans-serif'],
        'trebuchet-ms': ['Trebuchet MS', 'Helvetica', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'], // Requires loading via CSS in globals.css or layout.tsx
        roboto: ['Roboto', 'sans-serif'],       // Requires loading via CSS
        lato: ['Lato', 'sans-serif'],           // Requires loading via CSS
        montserrat: ['Montserrat', 'sans-serif'], // Requires loading via CSS
        oswald: ['Oswald', 'sans-serif'],         // Requires loading via CSS
        raleway: ['Raleway', 'sans-serif'],       // Requires loading via CSS
        'open-dyslexic': ['OpenDyslexic', 'sans-serif'], // Requires loading via CSS
        lexend: ['Lexend', 'sans-serif'],         // Requires loading via CSS
        'bebas-neue': ['Bebas Neue', 'sans-serif'], // Added Bebas Neue
        inter: ['Inter', 'sans-serif'], // Added Inter
        'playfair-display': ['Playfair Display', 'serif'], // Added Playfair Display
        'noto-sans': ['Noto Sans', 'sans-serif'], // Added Noto Sans
        // Ensure default sans, serif, mono are correctly mapped if overriding
        // Example if using Geist and defaultTheme from tailwindcss/defaultTheme
        // sans: ['var(--font-geist-sans)', ...defaultTheme.fontFamily.sans],
        // mono: ['var(--font-geist-mono)', ...defaultTheme.fontFamily.mono],
        // Using Geist font variables directly for default sans/mono
        sans: ['var(--font-geist-sans)', 'sans-serif'], // Add fallback
        mono: ['var(--font-geist-mono)', 'monospace'], // Add fallback
      },
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config; // Use "satisfies Config" for better type checking

export default config; // Export directly
