import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { LessonType, SectionType } from '@/interfaces/section.interface'
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Flex,
	HStack,
	Stack,
	Text,
	useToast,
} from '@chakra-ui/react'
import { Checkbox } from 'antd'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const CourseDashboardMenu = () => {
	const { currentCourse, isLoading, lesson } = useTypedSelector(
		state => state.user
	)
	const router = useRouter()
	const { getLesson, completeLesson, getCourseSections } = useActions()
	const [lessonModule, setLessonModule] = useState<number>(0)
	const { user } = useAuth()
	const toast = useToast()
	const [sections, setSections] = useState<SectionType[]>(
		currentCourse?.sections as SectionType[]
	)

	useEffect(() => {
		setSections(currentCourse?.sections as SectionType[])
	}, [currentCourse])

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
				if (currentCourse?.sections && currentCourse.sections[0]?.lessons) {
					currLesson = currentCourse?.sections[0]?.lessons[0]
				}
			}
		}

		onLesson(currLesson)
	}, [router.query.lesson, currentCourse])

	const completeLessonFunc = (
		lessonId: string,
		sectionId: string,
		completed: boolean,
		nextLesson: LessonType
	) => {
		completeLesson({
			lessonId,
			callback() {
				if (completed) {
					toast({
						title: 'Lesson completed!',
						status: 'success',
					})
				}
				setSections(
					sections?.map(item => {
						if (item._id === sectionId) {
							return {
								...item,
								lessons: item.lessons?.map((lesson: any) => {
									if (lesson._id === lessonId) {
										return {
											...lesson,
											completed: completed
												? [...lesson?.completed, user?._id]
												: lesson.completed?.filter((x: any) => x !== user?._id),
										}
									} else {
										return lesson
									}
								}),
							}
						} else {
							return item
						}
					}) as SectionType[]
				)

				if (completed) {
					onLesson(nextLesson)
				}
			},
			errorCallback() {
				toast({
					title: 'Error with action!',
					status: 'error',
				})
			},
		})
	}

	const getAllLessons = () => {
		const allLessons: LessonType[] = []

		sections?.map(item => {
			item.lessons?.map(lesson => {
				allLessons.push(lesson)
			})
		})

		return allLessons
	}

	const getCurrentLessonIndex = (lessonId: string) =>
		getAllLessons()?.findIndex(item => item._id === lessonId) + 1

	return (
		<Stack>
			<Flex alignItems={'center'} justifyContent={'space-between'} py={2}>
				<Text px={2} fontWeight={'500'} fontSize={'18px'}>
					{lesson?.name}
				</Text>
				<Text px={2} fontWeight={'500'} fontSize={'18px'}>
					{getCurrentLessonIndex(lesson?._id as string)}/
					{getAllLessons().length}
				</Text>
			</Flex>
			<Accordion defaultIndex={lessonModule} index={lessonModule}>
				{sections?.map((item, index) => (
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
									isDisabled={
										item.lessons && index !== 0
											? Boolean(
													!item.lessons[index - 1]?.completed?.includes(
														user?._id
													)
											  )
											: false
									}
									key={index}
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
									wordBreak={'break-word'}
								>
									<HStack maxW={'70%'} overflowX={'hidden'} w={'full'}>
										<Checkbox
											disabled={
												item.lessons && index !== 0
													? Boolean(
															!item.lessons[index - 1]?.completed?.includes(
																user?._id
															)
													  )
													: false
											}
											type='checkbox'
											defaultChecked={
												lesson.completed?.find(x => x === user?._id?.toString())
													? true
													: false
											}
											checked={
												lesson.completed?.find(x => x === user?._id?.toString())
													? true
													: false
											}
											onChange={e => {
												completeLessonFunc(
													lesson._id as string,
													item._id as string,
													e.target.checked,
													item.lessons && item.lessons[index + 1]
														? item.lessons[index + 1]
														: lesson
												)
											}}
										/>
										<Text
											onClick={() => onLesson(lesson)}
											fontSize={'15px'}
											fontWeight={'500'}
											w={'full'}
											textAlign={'left'}
										>
											{lesson.name}
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
