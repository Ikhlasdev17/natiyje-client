import { useTypedSelector } from '@/hooks/useTypedSelector'
import { Grid } from '@chakra-ui/react'
import CourseItem from '../CourseItem/course-item'

const ProfileMyCourses = () => {
	const { user } = useTypedSelector(state => state.user)
	return (
		<Grid
			gridTemplateColumns={{
				base: '1fr',
				md: '1fr 1fr',
			}}
			gap={4}
		>
			{user?.courses?.map(item => (
				<CourseItem course={item} key={item._id} />
			))}
		</Grid>
	)
}

export default ProfileMyCourses
