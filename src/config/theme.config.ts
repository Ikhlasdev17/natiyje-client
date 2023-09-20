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
		// gray: {
		// 	900: '#000000',
		// 	800: '#191919',
		// 	700: '#323232',
		// 	600: '#4c4c4c',
		// 	500: '#666666',
		// 	400: '#7f7f7f',
		// 	300: '#999999',
		// 	200: '#b2b2b2',
		// 	100: '#cccccc',
		// },
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
