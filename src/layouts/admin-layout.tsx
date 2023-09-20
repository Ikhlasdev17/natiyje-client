import { useActions } from '@/hooks/useActions'
import { useOnClickOutside } from '@/hooks/useClickOutside'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import AppProvider from '@/providers/admin.provider'
import { AppProviderProps } from '@/providers/app.provider'
import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FunctionComponent, ReactElement, useRef } from 'react'
import AdminHeader from './admin-header/admin-header'
import AdminSidebar from './admin-sidebar/admin-sidebar'
import { LayoutProps } from './layout.props'

const AdminLayout = ({ children }: LayoutProps) => {
	const { sidebarIsOpen } = useTypedSelector(state => state.settings)
	const router = useRouter()
	const sidebarRef = useRef<any>()
	const { toggleSidebar, openSidebar, closeSidebar } = useActions()

	useOnClickOutside(sidebarRef, () => {
		if (sidebarIsOpen) {
			closeSidebar()
		}
	})

	return (
		<Flex h={'100vh'} alignItems={'stretch'}>
			<Box
				w={{
					base: '300px',
					md: '25rem',
				}}
				h={'100vh'}
				pos={{
					base: 'fixed',
					md: 'sticky',
				}}
				zIndex={'50'}
				bg={useColorModeValue('white', 'gray.800')}
				top={'0'}
				left={{
					base: sidebarIsOpen ? 0 : '-100%',
					md: 0,
				}}
				ref={sidebarRef}
				overflowY={'auto'}
			>
				<AdminSidebar />
			</Box>

			<Box w={'100%'} p={6} h={'100vh'} overflowY={'auto'}>
				<AdminHeader />
				{children}
			</Box>
		</Flex>
	)
}

export default AdminLayout

export const withAdminLayout = <
	T extends Record<string, unknown> & AppProviderProps
>(
	Component: FunctionComponent<T>
) => {
	return function withLayoutComponent(props: T): ReactElement {
		return (
			<AdminLayout>
				<AppProvider
					courses={props.courses}
					fileFolders={props.fileFolders}
					course={props.course}
				>
					<Component {...props} />
				</AppProvider>
			</AdminLayout>
		)
	}
}
