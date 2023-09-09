import { ThemeConfig, extendTheme } from '@chakra-ui/react'

export const theme: ThemeConfig = extendTheme({
	config: {
		initialColorMode: 'light',
		useSystemColorMode: false,
	},
	colors: {
		brand: {
			700: '#f0241a',
			600: '#f23b32',
			500: '#f3524a',
			400: '#f56962',
			300: '#f7807a',
			200: '#f89792',
			100: '#faaeaa',
		},
		textColor: '#302D3A',
		lightTextColor: '#5F5982',
	},
	fonts: {
		heading: `'Poppins', sans-serif`,
		body: `'Poppins', sans-serif`,
	},
	breakpoints: {
		base: '0px',
		sm: '400px',
		md: '768px',
		lg: '1100px',
		xl: '1200px',
		'2xl': '1536px',
	},
})
