
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
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
				// Cyberpunk theme colors
				cyber: {
					dark: '#121222',
					darker: '#0A0A1B',
					blue: '#05D9E8',
					pink: '#FF2A6D',
					green: '#01FFC3',
					purple: '#7A04EB',
					yellow: '#FFD600',
				},
				// Base colors
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
				},
				'glitch': {
					'0%': {
						transform: 'translate(0)',
						textShadow: '0.05em 0 0 #FF2A6D, -0.05em -0.025em 0 #01FFC3'
					},
					'14%': {
						transform: 'translate(0)',
						textShadow: '0.05em 0 0 #FF2A6D, -0.05em -0.025em 0 #01FFC3'
					},
					'15%': {
						transform: 'translate(0.025em, 0.025em)',
						textShadow: '-0.05em -0.025em 0 #FF2A6D, 0.025em 0.05em 0 #01FFC3'
					},
					'49%': {
						transform: 'translate(0.025em, 0.025em)',
						textShadow: '-0.05em -0.025em 0 #FF2A6D, 0.025em 0.05em 0 #01FFC3'
					},
					'50%': {
						transform: 'translate(0.025em, 0)',
						textShadow: '0.05em 0 0 #05D9E8, -0.05em -0.025em 0 #7A04EB'
					},
					'99%': {
						transform: 'translate(0.025em, 0)',
						textShadow: '0.05em 0 0 #05D9E8, -0.05em -0.025em 0 #7A04EB'
					},
					'100%': {
						transform: 'translate(0)',
						textShadow: '-0.05em 0 0 #FF2A6D, -0.025em -0.05em 0 #01FFC3'
					}
				},
				'float': {
					'0%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					},
					'100%': {
						transform: 'translateY(0px)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						filter: 'drop-shadow(0 0 0.5rem currentColor)'
					},
					'50%': {
						filter: 'drop-shadow(0 0 1.5rem currentColor)'
					}
				},
				'typewriter': {
					from: {
						width: '0%'
					},
					to: {
						width: '100%'
					}
				},
				'blink-caret': {
					'from, to': {
						borderColor: 'transparent'
					},
					'50%': {
						borderColor: '#05D9E8'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glitch': 'glitch 1s linear infinite',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'typewriter': 'typewriter 4s steps(40) 1s forwards',
				'blink-caret': 'blink-caret 0.75s step-end infinite'
			},
			backgroundImage: {
				'cyber-grid': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2305D9E8' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
				'cyber-dots': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2301FFC3' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
