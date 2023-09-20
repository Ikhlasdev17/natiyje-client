import AppProvider, { AppProviderProps } from '@/providers/app.provider'
import { useRouter } from 'next/router'
import { FunctionComponent, ReactElement } from 'react'
import Header from './header/header'
import { LayoutProps } from './layout.props'

const Layout = ({ children }: LayoutProps) => {
	const router = useRouter()
	return (
		<div>
			<Header
				color={router.pathname === '/' ? 'white' : 'dark'}
				colorScheme={router.pathname === '/' ? 'transparent' : 'white'}
				pos={router.pathname === '/' ? 'absolute' : 'sticky'}
			/>
			{children}
		</div>
	)
}

export default Layout

export const withLayout = <
	T extends Record<string, unknown> & AppProviderProps
>(
	Component: FunctionComponent<T>
) => {
	return function withLayoutComponent(props: T): ReactElement {
		return (
			<Layout>
				<AppProvider
					fullCourse={props.fullCourse}
					courses={props.courses}
					course={props.course}
					fileFolders={[]}
				>
					<Component {...props} />
				</AppProvider>
			</Layout>
		)
	}
}
