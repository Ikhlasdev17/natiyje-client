import { useTypedSelector } from '@/hooks/useTypedSelector'
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
import { useState } from 'react'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import EmbedVideoModal from '../embed-video-modal/embed-video-modal'

const CourseDetailCurriculum = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [selectedVideo, setSelectedVideo] = useState('')
	const { course } = useTypedSelector(state => state.course)

	return (
		<Box>
			<EmbedVideoModal
				isOpen={isOpen}
				onOpen={onOpen}
				onClose={onClose}
				embedVideo={
					<>
						<Box
							as='iframe'
							src={selectedVideo}
							w={'full'}
							h={'400px'}
							display={'flex'}
							justifyContent={'center'}
							alignItems={'center'}
							allowFullScreen
							textAlign={'center'}
							rounded={'md'}
						/>
					</>
				}
			/>

			<Accordion allowToggle defaultIndex={[0]} allowMultiple>
				{course?.sections?.map(item => (
					<AccordionItem border={'none'} key={item._id}>
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
							{item?.lessons?.map(lesson => (
								<Flex
									key={lesson?.name}
									p={1}
									bg={'gray.100'}
									rounded={'md'}
									justifyContent={'space-between'}
									alignItems={'center'}
									mb={2}
									cursor={lesson?.embedVideo ? 'pointer' : ''}
									opacity={lesson?.embedVideo ? '1' : '.7'}
								>
									<HStack>
										<Icon
											color={lesson?.embedVideo ? 'brand.500' : 'textColor'}
											as={AiOutlinePlayCircle}
											p={1}
											fontSize={'24px'}
											onClick={() => {
												if (lesson?.embedVideo) {
													setSelectedVideo(lesson.embedVideo)
													onOpen()
												}
											}}
										/>
										<Text fontSize={'14px'} color={'lightTextColor'}>
											{lesson.name}
										</Text>
									</HStack>

									<Text fontSize={'14px'} pr={3} color={'lightTextColor'}>
										{lesson.hour}:{lesson.minute}:{lesson.second}
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
