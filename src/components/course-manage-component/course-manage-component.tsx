import { getFileUrl } from '@/api/api.constants'
import $axios from '@/api/api.interceptor'
import { initialCourseData } from '@/config/constants'
import { loadImage } from '@/helpers/load-image'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { createCourseValidator } from '@/validations/course.validator'
import {
	Box,
	Button,
	Flex,
	FormLabel,
	Icon,
	Image,
	Input,
	Select,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import { Form, Formik, FormikValues } from 'formik'
import { ChangeEvent, FC, useEffect, useState } from 'react'
import { BsX } from 'react-icons/bs'
import { slugify } from '../../helpers/slug.helper'
import RichTextField from '../rich-text-field/rich-text-field'
import TagField from '../tags-input/tags-input'
import TextAreaField from '../text-area-field/text-area-field'
import TextField from '../text-field/text-field'
import { CourseManagePropsType } from './course-manage-component.props'
const CourseManageComponent: FC<CourseManagePropsType> = ({
	data = null,
	onComplete,
}) => {
	const [initialData, setInitialData] = useState(initialCourseData)
	const [file, setFile] = useState<File | null | string>()
	const { fetchAllCategories, fetchStudents } = useActions()
	const { categories } = useTypedSelector(state => state.category)
	const { isLoading } = useTypedSelector(state => state.course)
	const { students } = useTypedSelector(state => state.student)
	const color = useColorModeValue('gray.100', 'gray.500')

	const onFileChange = (file: File) => {
		setFile(file)
	}

	const onSubmit = async (formikValues: FormikValues) => {
		let data: any = {}

		console.log(formikValues)

		const slug = slugify(formikValues.title)

		if (file && typeof file !== 'string') {
			const formData = new FormData()
			formData.append('image', file)

			const response = await $axios.post(
				getFileUrl('upload?folder=course'),
				formData
			)

			data = {
				...formikValues,
				image: response?.data?.path,
				slug,
			}
			onComplete(data)
		} else {
			data = {
				...formikValues,
				image: file,
				slug,
			}

			onComplete(data)
		}
	}

	useEffect(() => {
		fetchAllCategories()
		fetchStudents({ roles: ['INSTRUCTOR', 'CEO', 'ADMIN'] })
	}, [])

	useEffect(() => {
		if (data) {
			setInitialData({ ...data, teacher: data?.teacher })
			setFile(data.image)
		}
	}, [data])

	return (
		<>
			<Formik
				initialValues={initialData}
				onSubmit={onSubmit}
				validationSchema={createCourseValidator()}
				enableReinitialize
			>
				{formik => (
					<Form>
						<TextField
							label='Kurs haqqinda video'
							placeholder='https://....'
							name='embedVideo'
						/>
						<Box>
							<Flex gap={4}>
								<TextField
									label='Title'
									placeholder='Nodejs toliq kurs'
									name='title'
								/>
								<TextField
									label='Price'
									placeholder='250000'
									name='price'
									type='number'
								/>
							</Flex>

							<Flex gap={4}>
								<TextAreaField
									label='Excerpt'
									placeholder='Excerpt'
									name='excerpt'
								/>
							</Flex>
							<Box my={3}>
								<FormLabel mb={3}>
									Teacher{' '}
									<Box as={'span'} color={'red.300'}>
										*
									</Box>
								</FormLabel>

								<Select
									value={formik.values.teacher}
									onChange={e =>
										formik.setFieldValue('teacher', e.target.value)
									}
								>
									{students.map(item => (
										<option key={item._id} value={item._id}>
											{item.fullName}
										</option>
									))}
								</Select>

								{formik.errors.teacher && formik.touched.teacher && (
									<Text mt={2} fontSize='14px' color='red.500'>
										{formik.errors.teacher as string}
									</Text>
								)}
							</Box>

							<Flex gap={4}>
								<TagField
									errorMessage={formik.errors.tags as string}
									formik={formik}
									label='Tags'
									placeholder='Tags'
									name='tags'
									values={formik.values.tags}
								/>

								<TagField
									errorMessage={formik.errors.requirements as string}
									formik={formik}
									label='Requirements'
									placeholder='Requirements'
									name='requirements'
									values={formik.values.requirements}
								/>
							</Flex>

							<TagField
								errorMessage={formik.errors.learn as string}
								formik={formik}
								label='Learn'
								placeholder='Learn'
								name='learn'
								values={formik.values.learn}
							/>

							<TextField
								label='Level'
								placeholder='Level'
								name='level'
								type='text'
							/>

							<Box my={3}>
								<FormLabel mb={3}>
									Description{' '}
									<Box as={'span'} color={'red.300'}>
										*
									</Box>
								</FormLabel>

								<RichTextField
									model={formik.values.description}
									setModel={e => formik.setFieldValue('description', e)}
								/>

								{formik.errors.description && formik.touched.description && (
									<Text mt={2} fontSize='14px' color='red.500'>
										{formik.errors.description as string}
									</Text>
								)}
							</Box>
						</Box>

						<Box my={3}>
							<FormLabel mb={3}>
								Preview image{' '}
								<Box as={'span'} color={'red.300'}>
									*
								</Box>
							</FormLabel>
							<Input
								type='file'
								onChange={(e: ChangeEvent<any>) => {
									onFileChange(e?.target?.files[0])
								}}
							/>
							{formik.errors.image && formik.touched.image && (
								<Text mt={2} fontSize='14px' color='red.500'>
									{formik.errors.image as string}
								</Text>
							)}
						</Box>
						{file ? (
							<Box maxW={'300px'} h={'200px'} pos={'relative'} my={4}>
								<Image
									src={
										typeof file === 'string'
											? loadImage(file) || 'https://picsum.photos/300'
											: URL.createObjectURL(file)
									}
									rounded={'md'}
									maxW={'300px'}
								/>
								<Icon
									as={BsX}
									rounded={'full'}
									cursor={'pointer'}
									bg={color}
									pos={'absolute'}
									top={'-10px'}
									right={'-10px'}
									color={'white'}
									fontSize={'24px'}
									onClick={() => setFile(null)}
								/>
							</Box>
						) : null}
						<Button
							type='submit'
							colorScheme='facebook'
							h={14}
							w={'full'}
							my={4}
							isLoading={isLoading}
						>
							Submit
						</Button>
					</Form>
				)}
			</Formik>
		</>
	)
}

export default CourseManageComponent
