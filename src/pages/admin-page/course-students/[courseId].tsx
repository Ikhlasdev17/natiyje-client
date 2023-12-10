import { withAdminLayout } from '@/layouts/admin-layout'
import { CourseStudentsPageComponent } from '@/page-components'

const CourseStudents = () => {
	return <CourseStudentsPageComponent />
}

export default withAdminLayout(CourseStudents)
