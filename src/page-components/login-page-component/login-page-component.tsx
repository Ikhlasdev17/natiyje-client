import TextField from '@/components/text-field/text-field'
import { AuthValidators } from '@/validations/auth.validators'
import {
	Box,
	Button,
	Flex,
	HStack,
	Heading,
	Image,
	Stack,
	Text,
} from '@chakra-ui/react'
import { Form, Formik, FormikValues } from 'formik'
import { useRouter } from 'next/router'

const LoginPageComponent = () => {
	const router = useRouter()

	const onSubmit = (formData: FormikValues) => {
		console.log(formData)
	}

	return (
		<Box
			display={'flex'}
			w={'full'}
			height={{
				base: '110vh',
				md: '100vh',
			}}
		>
			<Flex
				justifyContent={'space-between'}
				zIndex={9999}
				pos={'absolute'}
				left={'50%'}
				transform={'translateX(-50%)'}
				mt={'35px'}
				w={{
					base: '90%',
					md: '90%',
					lg: '80%',
				}}
			>
				<Heading
					color={{
						base: 'gray.600',
						md: 'gray.600',
						lg: 'white',
					}}
					onClick={() => router.push('/')}
					cursor={'pointer'}
				>
					NATIYJE
				</Heading>

				<HStack spacing={'40px'}>
					<Button
						display={{
							base: 'none',
							md: 'block',
						}}
						variant={'link'}
						onClick={() => router.push('/login')}
					>
						Sizde alleqashan akkount barma?
					</Button>
					<Button
						colorScheme='brand'
						variant={'solid'}
						onClick={() => router.push('/register')}
					>
						Dizimnen otiw
					</Button>
				</HStack>
			</Flex>
			<Box
				bg={'brand.300'}
				flex={1}
				pos={'relative'}
				display={{
					base: 'none',
					md: 'none',
					lg: 'flex',
				}}
				alignItems={'center'}
				justifyContent={'center'}
			>
				<Image src='/auth-path.svg' pos={'absolute'} top={2} right={2} />
				<Stack justify={'center'} align={'center'}>
					<Image src='/auth.svg' w={'80%'} left={'225px'} zIndex={999} />
					<Heading
						fontSize={'50px'}
						textAlign={'center'}
						mt={'40px'}
						color={'white'}
					>
						Turn your ambition <br /> into a success story
					</Heading>
					<Text
						color={'white'}
						fontWeight={'400'}
						fontSize={'24px'}
						mt={'20px'}
					>
						Choose from over 100,000 online video.
					</Text>
				</Stack>
				<Image src='/auth-path2.svg' pos={'absolute'} bottom={2} left={2} />
			</Box>
			<Box flex={1} mt={'150px'} p={6}>
				<Box maxW={'500px'} mx={'auto'} mb={12}>
					<Heading
						fontWeight={'400'}
						fontSize={{
							base: '30px',
							md: '40px',
						}}
						color={'textColor'}
					>
						Create your free account
					</Heading>
					<Text
						color={'lightTextColor'}
						fontSize={{
							base: '20px',
							md: '24px',
						}}
						my={'20px'}
					>
						See how the world’s best user experiences are created
					</Text>
					<Formik
						validationSchema={AuthValidators.login()}
						initialValues={{
							phone: '',
							password: '',
						}}
						onSubmit={onSubmit}
					>
						<Form>
							<Stack>
								<TextField
									name='phone'
									label='Telefon nomeri'
									placeholder='+998953555020'
									type='text'
								/>
								<TextField
									name='password'
									label='Parol'
									placeholder='Parol'
									type='password'
								/>
								<Button mt={'20px'} colorScheme='brand' h={14} type='submit'>
									Kiriw
								</Button>
								<Button
									mt={4}
									display={{
										base: 'block',
										md: 'none',
									}}
									variant={'link'}
									onClick={() => router.push('/register')}
								>
									Dizimnen otiw
								</Button>
							</Stack>
						</Form>
					</Formik>
				</Box>
			</Box>
		</Box>
	)
}

export default LoginPageComponent
