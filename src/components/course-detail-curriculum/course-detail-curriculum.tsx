import { sections } from '@/config/constants'
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Flex,
	HStack,
	Icon,
	Text,
	useDisclosure,
} from '@chakra-ui/react'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import EmbedVideoModal from '../embed-video-modal/embed-video-modal'

const CourseDetailCurriculum = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<Box>
			<EmbedVideoModal
				isOpen={isOpen}
				onOpen={onOpen}
				onClose={onClose}
				embedVideo={
					<iframe
						width='100%'
						height='100%'
						src='https://www.youtube.com/embed/ZbdUKRyZnuY'
						title='HTMX заменит Frontend?! WTF?'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen
					></iframe>
				}
			/>

			<Accordion allowToggle defaultIndex={[0]} allowMultiple>
				{sections.map(item => (
					<AccordionItem border={'none'} key={item.id}>
						<AccordionButton
							borderLeft={'2px'}
							borderLeftColor={'brand.200'}
							bg={'gray.50'}
							display={'flex'}
							justifyContent='space-between'
							borderBottom={'1px'}
							borderBottomColor={'gray.100'}
						>
							{item.title}
							<AccordionIcon />
						</AccordionButton>

						<AccordionPanel>
							{item.lessons.map(lesson => (
								<Flex
									key={item.title}
									p={1}
									bg={'gray.100'}
									rounded={'md'}
									justifyContent={'space-between'}
									alignItems={'center'}
									mb={2}
									cursor={lesson.embedVideo ? 'pointer' : ''}
									opacity={lesson.embedVideo ? '1' : '.7'}
								>
									<HStack>
										<Icon
											color={lesson.embedVideo ? 'brand.500' : 'textColor'}
											as={AiOutlinePlayCircle}
											p={1}
											fontSize={'24px'}
											onClick={() => {
												if (lesson.embedVideo) {
													onOpen()
												}
											}}
										/>
										<Text fontSize={'14px'} color={'lightTextColor'}>
											{lesson.title}
										</Text>
									</HStack>

									<Text fontSize={'14px'} pr={3} color={'lightTextColor'}>
										{lesson.duration}
									</Text>
								</Flex>
							))}
						</AccordionPanel>
					</AccordionItem>
				))}
			</Accordion>
		</Box>
	)
}

export default CourseDetailCurriculum
