import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from './useAuth'

const useAdminRedirect = () => {
	const { user } = useAuth()
	const router = useRouter()
	useEffect(() => {
		if (!user) {
			router.push('/')
		}

		if (user?.role === 'USER') {
			router.push('/')
		}
	}, [user, router.pathname])

	return null
}

export default useAdminRedirect
