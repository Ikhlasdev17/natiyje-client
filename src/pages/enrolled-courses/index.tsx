import { withLayout } from '@/layouts/layout'
import { EnrolledCoursePageComponent } from '@/page-components'

const EnrolledCourses = () => {
	return (
		<>
			<EnrolledCoursePageComponent />
		</>
	)
}

export default withLayout(EnrolledCourses)
