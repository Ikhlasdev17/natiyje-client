import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { FC, ReactNode, useEffect } from 'react'

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const { user } = useAuth()
	const { logout, checkUser } = useActions()
	const router = useRouter()

	useEffect(() => {
		const refresh = Cookies.get('refresh')
		if (refresh) {
			checkUser()
		}
	}, [])

	useEffect(() => {
		const refresh = Cookies.get('refresh')
		if (!refresh && user) {
			logout()
		}
	}, [router.pathname])

	return children
}

export default AuthProvider
