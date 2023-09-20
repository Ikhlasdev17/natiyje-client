import SectionAccordion from '@/components/section-accordion/section-accordion'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import {
	Accordion,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Heading,
	Input,
	Stack,
	useColorModeValue,
	useDisclosure,
	useToast,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const CurriculumPageComponent = () => {
	const [sectionTitle, setSectionTitle] = useState('')
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { getCourseSections, createSection } = useActions()
	const { sections } = useTypedSelector(state => state.course)
	const router = useRouter()
	const toast = useToast()

	useEffect(() => {
		getCourseSections({ id: router.query.slug as string })
	}, [router.query.slug])

	const createSectionSubmit = () => {
		createSection({
			title: sectionTitle,
			sectionId: router.query.slug as string,
			callback: () => {
				toast({
					title: 'Section created successfull!',
					status: 'success',
					position: 'top',
				})
				getCourseSections({ id: router.query.slug as string })
				onClose()
			},
		})
	}

	return (
		<Stack py={6}>
			<Flex w={'full'} justifyContent={'end'} mb={6}>
				<Button colorScheme='facebook' size={'sm'} onClick={onOpen}>
					Add section
				</Button>
			</Flex>
			{sections?.length === 0 && (
				<Heading textAlign={'center'} fontSize={'22px'} opacity={0.7}>
					Kurs modullari tabiladi!
				</Heading>
			)}
			<Accordion
				onDragOver={e => e.preventDefault()}
				bg={useColorModeValue('white', 'gray.700')}
				variant={'enclosed'}
				allowToggle
			>
				{sections?.map((item, index) => (
					<SectionAccordion sectionIndex={index} key={item._id} item={item} />
				))}
			</Accordion>

			<Drawer isOpen={isOpen} placement='right' onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Create section</DrawerHeader>

					<DrawerBody>
						<form
							onSubmit={e => {
								e.preventDefault()
								createSectionSubmit()
							}}
						>
							<Input
								onChange={e => setSectionTitle(e.target.value)}
								value={sectionTitle}
								required
							/>
							<Button type='submit' mt={3} w={'full'}>
								Submit
							</Button>
						</form>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Stack>
	)
}

export default CurriculumPageComponent
