import { useActions } from '@/hooks/useActions'
import { Button, Flex, HStack, Icon, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { BsList, BsLock, BsPen, BsTrash, BsUnlock } from 'react-icons/bs'
import { LessonAccordionItemProps } from './lesson-accordion-item.props'

const LessonAccordion = ({
	lesson,
	lessonIndex,
	lessons,
	sectionId,
}: LessonAccordionItemProps) => {
	const { changeLessonPosition, getCourseSections } = useActions()
	const { query } = useRouter()

	const onDragStartLesson = (e: any) => {
		e.dataTransfer.setData('lessonIndex', lessonIndex)
	}

	const onDropLesson = (e: any) => {
		const movinglessonIndex = Number(e.dataTransfer.getData('lessonIndex'))
		const allSections = [...lessons]
		const movingItem = allSections[movinglessonIndex]
		allSections.splice(movinglessonIndex, 1)
		allSections.splice(lessonIndex, 0, movingItem)

		const editedIndex = allSections.map(c => c._id)

		changeLessonPosition({
			lessons: editedIndex as string[],
			sectionId: sectionId,
			callback() {
				getCourseSections({ id: query.slug as string })
			},
		})
	}

	return (
		<>
			<Flex
				cursor={'pointer'}
				draggable
				alignItems={'center'}
				justifyContent={'space-between'}
				w={'full'}
				p={2}
				onDragStart={onDragStartLesson}
				onDrop={onDropLesson}
			>
				<HStack>
					<Icon as={BsList} />
					<Text>{lesson.name}</Text>
				</HStack>
				<HStack>
					<Button size={'sm'} colorScheme='facebook' variant={'ghost'}>
						<Icon as={lesson?.isOpen ? BsUnlock : BsLock} />
					</Button>
					<Button size={'sm'} colorScheme='facebook'>
						<Icon as={BsPen} />
					</Button>
					<Button size={'sm'} colorScheme={'red'}>
						<Icon as={BsTrash} />
					</Button>
				</HStack>
			</Flex>
		</>
	)
}

export default LessonAccordion
