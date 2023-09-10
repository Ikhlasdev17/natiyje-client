import { theme } from '@/config/theme.config'
import '@/styles/globals.css'
import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Router, useRouter } from 'next/router'
import { useEffect } from 'react'

import AuthProvider from '@/providers/auth.provider'
import { store } from '@/store/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Provider } from 'react-redux'

NProgress.configure({ showSpinner: false })

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()
	const { setColorMode } = useColorMode()

	useEffect(() => {
		if (!router.pathname.includes('admin-page')) {
			if (setColorMode) {
				setColorMode('light')
			}
		}
	}, [router.pathname, setColorMode])

	useEffect(() => {
		const handleRouteStart = () => NProgress.start()
		const handleRouteDone = () => NProgress.done()

		Router.events.on('routeChangeStart', handleRouteStart)
		Router.events.on('routeChangeComplete', handleRouteDone)
		Router.events.on('routeChangeError', handleRouteDone)

		return () => {
			Router.events.off('routeChangeStart', handleRouteStart)
			Router.events.off('routeChangeComplete', handleRouteDone)
			Router.events.off('routeChangeError', handleRouteDone)
		}
	}, [])

	return (
		<ChakraProvider theme={theme}>
			<Provider store={store}>
				<AuthProvider>
					<Component {...pageProps} />
				</AuthProvider>
			</Provider>
		</ChakraProvider>
	)
}
