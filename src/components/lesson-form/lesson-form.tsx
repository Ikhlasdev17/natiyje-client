import { initialLessonCreateFormData } from '@/config/constants'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { FileService } from '@/services/file.service'
import {
	Box,
	Button,
	CloseButton,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Progress,
	Select,
	Text,
} from '@chakra-ui/react'
import { Form, Formik, FormikValues } from 'formik'
import { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'
import RichTextField from '../rich-text-field/rich-text-field'
import TextField from '../text-field/text-field'
import { LessonFormPropsType } from './lesson-form.props'

const LessonForm = ({ onComplete, data }: LessonFormPropsType) => {
	const [videoUploading, setVideoUploading] = useState(false)
	const [draftVideoUrl, setDraftVideoUrl] = useState('')
	const [initialValues, setInitialValues] = useState(
		initialLessonCreateFormData
	)
	const [selectedFolder, setSelectedFolder] = useState('34903')
	const [videoUrl, setVideoUrl] = useState('')

	const { folders } = useTypedSelector(state => state.file)
	const { isLoading } = useTypedSelector(state => state.course)

	const upload = async (file: File) => {
		setVideoUploading(true)
		FileService.uploadVideo(file, selectedFolder)
			.then(res => {
				setVideoUrl(res)
				setDraftVideoUrl(res)
			})
			.finally(() => {
				setVideoUploading(false)
			})
	}

	const onSubmit = (formikValues: FormikValues) => {
		if (videoUrl) {
			onComplete({
				...formikValues,
				embedVideo: videoUrl,
				minute: +formikValues.minute,
				second: +formikValues.second,
				hour: +formikValues.hour,
			})
		}
	}

	return (
		<Box>
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				{formik => (
					<Form>
						<FormControl mb={4}>
							<FormLabel>Select folder</FormLabel>
							<Select onChange={e => setSelectedFolder(e.target.value)}>
								{folders?.map(item => (
									<option key={item.id} value={item.id}>
										{item.name}
									</option>
								))}
							</Select>
						</FormControl>
						<FormControl w={'full'}>
							<FileUploader
								disabled={!selectedFolder || videoUploading}
								handleChange={upload}
								name='file'
								types={['mp4', 'mov', 'mkv', 'avi']}
								style={{ minWidth: '100%' }}
							/>
							{videoUploading && <Progress size='xs' isIndeterminate />}
							{videoUrl && (
								<Box pos={'relative'}>
									<iframe
										style={{
											width: '100%',
											height: '250px',
											marginTop: '25px',
										}}
										src={videoUrl}
										allowFullScreen
									/>
									<CloseButton
										onClick={() => setVideoUrl('')}
										pos={'absolute'}
										top={0}
										right={0}
										colorScheme='red'
										color={'red'}
									/>
								</Box>
							)}
							<Flex align={'stretch'} mt={2} gap={2}>
								<Input
									h={14}
									value={draftVideoUrl}
									onChange={e => setDraftVideoUrl(e.target.value)}
								/>
								<Button
									isDisabled
									h={14}
									onClick={() => setVideoUrl(draftVideoUrl)}
								>
									Change url
								</Button>
							</Flex>
						</FormControl>
						<TextField
							label='Sabaq temasin kiritin'
							name='name'
							placeholder='1-sabaq. Kirisiw'
							type='text'
						/>
						<Flex
							flexDir={{
								base: 'column',
								lg: 'row',
							}}
							gap={4}
							mb={4}
						>
							<TextField label='Saat' name='hour' placeholder='1' />
							<TextField label='Minut' name='minute' placeholder='32' />
							<TextField label='Sekund' name='second' placeholder='46' />
						</Flex>

						<Box my={3}>
							<FormLabel mb={3}>
								Description{' '}
								<Box as={'span'} color={'red.300'}>
									*
								</Box>
							</FormLabel>

							<RichTextField
								model={formik.values.material as string}
								setModel={e => formik.setFieldValue('material', e)}
							/>

							{formik.errors.material && formik.touched.material && (
								<Text mt={2} fontSize='14px' color='red.500'>
									{formik.errors.material as string}
								</Text>
							)}
						</Box>
						<Button
							isLoading={videoUploading || isLoading}
							isDisabled={!videoUrl}
							h={14}
							colorScheme='facebook'
							w={'full'}
							type='submit'
						>
							Submit
						</Button>
					</Form>
				)}
			</Formik>
		</Box>
	)
}

export default LessonForm
