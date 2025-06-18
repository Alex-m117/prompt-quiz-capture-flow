
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
					DEFAULT: 'oklch(var(--color-primary))',
					foreground: 'oklch(var(--color-primary-content))'
				},
				secondary: {
					DEFAULT: 'oklch(var(--color-secondary))',
					foreground: 'oklch(var(--color-secondary-content))'
				},
				accent: {
					DEFAULT: 'oklch(var(--color-accent))',
					foreground: 'oklch(var(--color-accent-content))'
				},
				neutral: {
					DEFAULT: 'oklch(var(--color-neutral))',
					foreground: 'oklch(var(--color-neutral-content))'
				},
				base: {
					100: 'oklch(var(--color-base-100))',
					200: 'oklch(var(--color-base-200))',
					300: 'oklch(var(--color-base-300))',
					content: 'oklch(var(--color-base-content))'
				},
				info: {
					DEFAULT: 'oklch(var(--color-info))',
					foreground: 'oklch(var(--color-info-content))'
				},
				success: {
					DEFAULT: 'oklch(var(--color-success))',
					foreground: 'oklch(var(--color-success-content))'
				},
				warning: {
					DEFAULT: 'oklch(var(--color-warning))',
					foreground: 'oklch(var(--color-warning-content))'
				},
				error: {
					DEFAULT: 'oklch(var(--color-error))',
					foreground: 'oklch(var(--color-error-content))'
				},
				destructive: {
					DEFAULT: 'oklch(var(--color-error))',
					foreground: 'oklch(var(--color-error-content))'
				},
				muted: {
					DEFAULT: 'oklch(var(--color-base-200))',
					foreground: 'oklch(var(--color-base-content))'
				},
				popover: {
					DEFAULT: 'oklch(var(--color-base-100))',
					foreground: 'oklch(var(--color-base-content))'
				},
				card: {
					DEFAULT: 'oklch(var(--color-base-100))',
					foreground: 'oklch(var(--color-base-content))'
				},
				sidebar: {
					DEFAULT: 'oklch(var(--color-base-200))',
					foreground: 'oklch(var(--color-base-content))',
					primary: 'oklch(var(--color-primary))',
					'primary-foreground': 'oklch(var(--color-primary-content))',
					accent: 'oklch(var(--color-accent))',
					'accent-foreground': 'oklch(var(--color-accent-content))',
					border: 'oklch(var(--color-base-300))',
					ring: 'oklch(var(--color-primary))'
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
