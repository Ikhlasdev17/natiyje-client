import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { LessonType } from '@/interfaces/section.interface'
import {
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	AlertDialog,
	AlertDialogBody,
	AlertDialogCloseButton,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
	Flex,
	HStack,
	Icon,
	Skeleton,
	Text,
	useColorModeValue,
	useDisclosure,
	useToast,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { BsList, BsPen, BsTrash } from 'react-icons/bs'
import LessonAccordion from '../lesson-accordion-item/lesson-accordion'
import LessonForm from '../lesson-form/lesson-form'
import { SectionAccordionProps } from './section-accordion.props'

const SectionAccordion = ({ item, sectionIndex }: SectionAccordionProps) => {
	const [loading, setLoading] = useState(false)
	const [selectedLesson, setSelectedLesson] = useState<null | string>(null)
	const { sections, isLoading } = useTypedSelector(state => state.course)
	const {
		updateSectionPosition,
		getCourseSections,
		deleteSection,
		createLesson,
	} = useActions()
	const { query } = useRouter()
	const toast = useToast()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const {
		isOpen: isOpenLessonForm,
		onOpen: onOpenLessonForm,
		onClose: onCloseLessonForm,
	} = useDisclosure()
	const cancelRef = useRef<any>()

	const onDragStartSection = (e: any) => {
		e.dataTransfer.setData('sectionIndex', sectionIndex)
	}

	const onDropSection = (e: any) => {
		const movingSectionIndex = Number(e.dataTransfer.getData('sectionIndex'))
		const allSections = [...sections]
		const movingItem = allSections[movingSectionIndex]
		allSections.splice(movingSectionIndex, 1)
		allSections.splice(sectionIndex, 0, movingItem)

		const editedIndex = allSections.map(c => c._id)

		updateSectionPosition({
			sections: editedIndex as string[],
			courseId: query.slug as string,
			callback() {
				getCourseSections({ id: query.slug as string })
			},
		})
	}

	const onDelete = () => {
		setLoading(true)
		deleteSection({
			sectionId: item._id as string,
			courseId: query.slug as string,
			callback: () => {
				toast({
					title: 'Section deleted successfull!',
					status: 'success',
					position: 'top',
				})
				getCourseSections({ id: query.slug as string })
				onClose()
				setLoading(false)
			},
		})
	}

	const onCompleteLesson = (formData: LessonType) => {
		createLesson({
			sectionId: selectedLesson as string,
			lesson: formData,
			callback: () => {
				toast({
					title: 'Lesson created successfull!',
					status: 'success',
					position: 'top',
				})
				getCourseSections({ id: query.slug as string })
				onCloseLessonForm()
			},
		})
	}

	return (
		<AccordionItem>
			<AccordionButton
				cursor={'pointer'}
				draggable
				onDragStart={onDragStartSection}
				onDrop={onDropSection}
			>
				{loading || isLoading ? (
					<Skeleton height={'40px'} w={'full'} />
				) : (
					<Flex
						alignItems={'center'}
						justifyContent={'space-between'}
						w={'full'}
					>
						<HStack>
							<Icon as={BsList} />
							<Text>{item.title}</Text>
						</HStack>
						<HStack>
							<Button size={'sm'} colorScheme='facebook'>
								<Icon as={BsPen} />
							</Button>
							<Button size={'sm'} colorScheme={'red'} onClick={onOpen}>
								<Icon as={BsTrash} />
							</Button>
							<AccordionIcon ml={2} />
						</HStack>
					</Flex>
				)}
			</AccordionButton>
			<AccordionPanel
				bg={useColorModeValue('gray.100', 'gray.800')}
				onDragOver={e => e.preventDefault()}
			>
				{item.lessons?.map((lesson, idx) => (
					<LessonAccordion
						lesson={lesson}
						lessonIndex={idx}
						key={item._id}
						lessons={item.lessons as LessonType[]}
						sectionId={item._id as string}
					/>
				))}
				<Flex justifyContent={'center'} mt={2}>
					<Button
						variant={'link'}
						fontWeight={'500'}
						onClick={() => {
							setSelectedLesson(item._id as string)
							onOpenLessonForm()
						}}
					>
						Add new lesson
					</Button>
				</Flex>
			</AccordionPanel>

			<AlertDialog
				isOpen={isOpen}
				onClose={onClose}
				leastDestructiveRef={cancelRef}
			>
				<AlertDialogOverlay />
				<AlertDialogContent>
					<AlertDialogHeader fontSize='lg' fontWeight='bold'>
						Delete section
					</AlertDialogHeader>

					<AlertDialogBody>
						Modul materiallari qayta tiklenbewi mumkin!
					</AlertDialogBody>

					<AlertDialogFooter>
						<Button onClick={onClose}>Cancel</Button>
						<Button colorScheme='red' onClick={onDelete} ml={3}>
							Delete
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>

			<AlertDialog
				motionPreset='slideInBottom'
				leastDestructiveRef={cancelRef}
				onClose={onCloseLessonForm}
				isOpen={isOpenLessonForm}
				isCentered
				size={'6xl'}
			>
				<AlertDialogOverlay />

				<AlertDialogContent>
					<AlertDialogHeader>Add lesson</AlertDialogHeader>
					<AlertDialogCloseButton />
					<AlertDialogBody
						maxH={{
							base: '100vh',
							lg: '70vh',
						}}
						overflowY={'auto'}
					>
						<LessonForm onComplete={onCompleteLesson} />
					</AlertDialogBody>
				</AlertDialogContent>
			</AlertDialog>
		</AccordionItem>
	)
}

export default SectionAccordion
