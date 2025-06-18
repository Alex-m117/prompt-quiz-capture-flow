
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
				border: 'var(--color-base-300)',
				input: 'var(--color-base-300)',
				ring: 'var(--color-primary)',
				background: 'var(--color-base-100)',
				foreground: 'var(--color-base-content)',
				primary: {
					DEFAULT: 'var(--color-primary)',
					foreground: 'var(--color-primary-content)'
				},
				secondary: {
					DEFAULT: 'var(--color-secondary)',
					foreground: 'var(--color-secondary-content)'
				},
				accent: {
					DEFAULT: 'var(--color-accent)',
					foreground: 'var(--color-accent-content)'
				},
				neutral: {
					DEFAULT: 'var(--color-neutral)',
					foreground: 'var(--color-neutral-content)'
				},
				base: {
					100: 'var(--color-base-100)',
					200: 'var(--color-base-200)',
					300: 'var(--color-base-300)',
					content: 'var(--color-base-content)'
				},
				info: {
					DEFAULT: 'var(--color-info)',
					foreground: 'var(--color-info-content)'
				},
				success: {
					DEFAULT: 'var(--color-success)',
					foreground: 'var(--color-success-content)'
				},
				warning: {
					DEFAULT: 'var(--color-warning)',
					foreground: 'var(--color-warning-content)'
				},
				error: {
					DEFAULT: 'var(--color-error)',
					foreground: 'var(--color-error-content)'
				},
				destructive: {
					DEFAULT: 'var(--color-error)',
					foreground: 'var(--color-error-content)'
				},
				muted: {
					DEFAULT: 'var(--color-base-200)',
					foreground: 'var(--color-base-content)'
				},
				popover: {
					DEFAULT: 'var(--color-base-100)',
					foreground: 'var(--color-base-content)'
				},
				card: {
					DEFAULT: 'var(--color-base-100)',
					foreground: 'var(--color-base-content)'
				},
				sidebar: {
					DEFAULT: 'var(--color-base-200)',
					foreground: 'var(--color-base-content)',
					primary: 'var(--color-primary)',
					'primary-foreground': 'var(--color-primary-content)',
					accent: 'var(--color-accent)',
					'accent-foreground': 'var(--color-accent-content)',
					border: 'var(--color-base-300)',
					ring: 'var(--color-primary)'
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
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
