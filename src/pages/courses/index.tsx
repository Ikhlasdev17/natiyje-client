import { withLayout } from '@/layouts/layout'
import { CoursesPageComponent } from '@/page-components'

const Courses = () => {
	return (
		<>
			<CoursesPageComponent />
		</>
	)
}

export default withLayout(Courses)
