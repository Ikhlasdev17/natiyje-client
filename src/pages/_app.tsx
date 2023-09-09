import { theme } from '@/config/theme.config'
import '@/styles/globals.css'
import { ChakraProvider, LightMode } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import { useEffect } from 'react'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		localStorage.setItem('chakra-ui-color-mode', 'light')
	}, [])

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
			<LightMode>
				<Component {...pageProps} />
			</LightMode>
		</ChakraProvider>
	)
}
