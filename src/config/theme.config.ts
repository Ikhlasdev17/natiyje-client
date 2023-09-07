import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
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
	},
})
