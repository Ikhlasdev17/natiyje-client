import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { LessonType } from '@/interfaces/section.interface'
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Checkbox,
	Flex,
	HStack,
	Stack,
	Text,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const CourseDashboardMenu = () => {
	const { currentCourse } = useTypedSelector(state => state.user)
	const router = useRouter()
	const { getLesson } = useActions()
	const [lessonModule, setLessonModule] = useState<number>(0)
	const { user } = useAuth()

	const onLesson = (lesson: LessonType) => {
		getLesson(lesson)
		localStorage.setItem(`${currentCourse?._id}`, lesson._id as string)
		router.replace(
			{
				pathname: `/courses/dashboard/${router.query.slug}`,
				query: { lesson: lesson._id },
			},
			undefined,
			{
				shallow: true,
			}
		)
	}

	useEffect(() => {
		const lessonId =
			localStorage.getItem(`${currentCourse?._id}`) || router.query.lesson

		const currentSection = currentCourse?.sections?.find(
			x => x.lessons?.findIndex(lesson => lesson._id === lessonId) !== -1
		)

		const currentModuleIndex = currentCourse?.sections?.findIndex(
			item => item._id === currentSection?._id
		)
		setLessonModule(
			currentModuleIndex !== -1 && currentModuleIndex !== undefined
				? currentModuleIndex
				: 0
		)
	}, [router.query.lesson, currentCourse])

	useEffect(() => {
		let currLesson: LessonType = {}
		const lessonId =
			localStorage.getItem(`${currentCourse?._id}`) || router.query.lesson

		if (currentCourse) {
			if (lessonId) {
				currentCourse?.sections?.map(item => {
					item.lessons?.map(lesson => {
						if (lesson._id === lessonId) {
							currLesson = lesson
						}
					})
				})
			} else {
				if (currentCourse.sections && currentCourse.sections[0].lessons) {
					currLesson = currentCourse.sections[0].lessons[0]
				}
			}
		}

		onLesson(currLesson)
	}, [router.query.lesson, currentCourse])

	return (
		<Stack>
			<Text px={2} fontWeight={'500'} fontSize={'14px'}>
				{currentCourse?.sections?.length} modul{' '}
			</Text>
			<Accordion defaultIndex={lessonModule} index={lessonModule}>
				{currentCourse?.sections?.map((item, index) => (
					<AccordionItem border={'none'} key={index}>
						<AccordionButton
							p={3}
							bg={'brand.300'}
							mb={2}
							rounded={'md'}
							as={Box}
							border={'none'}
							cursor={'pointer'}
							color={'white'}
							_hover={{
								bg: 'brand.400',
							}}
							onClick={() => setLessonModule(index)}
						>
							<Flex justify={'space-between'} alignItems={'center'} w={'full'}>
								{item.title}
								<AccordionIcon />
							</Flex>
						</AccordionButton>

						<AccordionPanel px={0} pb={2}>
							{item.lessons?.map((lesson, index) => (
								<Button
									// isDisabled={
									// 	item.lessons
									// 		? Boolean(
									// 				!item.lessons[index - 1]?.completed?.includes(
									// 					user?._id
									// 				)
									// 		  )
									// 		: false
									// }
									display={'flex'}
									alignItems={'center'}
									w={'full'}
									justifyContent={'space-between'}
									gap={3}
									mb={2}
									variant={
										router.query.lesson === lesson._id ? 'solid' : 'ghost'
									}
									px={2}
									onClick={() => onLesson(lesson)}
									wordBreak={'break-word'}
								>
									<HStack maxW={'70%'} overflowX={'hidden'}>
										<Checkbox colorScheme='brand' />
										<Text fontSize={'15px'} fontWeight={'500'}>
											{lesson.name}...
										</Text>
									</HStack>
									<Text
										fontSize={'14px'}
										fontWeight={'400'}
										textDecor={'underline'}
									>
										{lesson.hour !== 0
											? `${
													(lesson.hour || 0) > 9
														? lesson.hour
														: '0' + lesson.hour
											  }:`
											: null}
										{lesson.minute !== 0
											? `${
													(lesson.minute || 0) > 9
														? lesson.minute
														: '0' + lesson.minute
											  }:`
											: null}
										{`${
											(lesson.second || 0) > 9
												? lesson.second
												: '0' + lesson.second
										}`}
									</Text>
								</Button>
							))}
						</AccordionPanel>
					</AccordionItem>
				))}
			</Accordion>
		</Stack>
	)
}

export default CourseDashboardMenu
