import { withLayout } from '@/layouts/layout'
import NotFoundPageComponent from '@/page-components/not-found-page-component/not-found-page-component'

const NotFoundPage = () => {
	return (
		<>
			<NotFoundPageComponent />
		</>
	)
}

export default withLayout(NotFoundPage)
