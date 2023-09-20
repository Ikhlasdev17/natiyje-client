import { useTypedSelector } from '@/hooks/useTypedSelector'
import { Box } from '@chakra-ui/react'
import HTMLReactParser from 'html-react-parser'

const CourseDetailOverview = () => {
	const { course } = useTypedSelector(state => state.course)
	return <Box>{HTMLReactParser(course?.description || '')}</Box>
}

export default CourseDetailOverview
