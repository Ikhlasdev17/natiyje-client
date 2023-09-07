import { withLayout } from '@/layouts/layout'
import { HomePageComponent } from '@/page-components'

const Home = () => {
	return (
		<>
			<HomePageComponent />
		</>
	)
}

export default withLayout(Home)
