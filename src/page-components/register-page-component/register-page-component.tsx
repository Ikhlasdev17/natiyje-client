import { RegisterSmsVerify } from '@/components'
import TextField from '@/components/text-field/text-field'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
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
	useToast,
} from '@chakra-ui/react'
import { Form, Formik, FormikValues } from 'formik'
import { useRouter } from 'next/router'
import { useState } from 'react'

const RegisterPageComponent = () => {
	const router = useRouter()
	const { register, sendSmsRegister, checkIsExistUser } = useActions()
	const { isLoading } = useTypedSelector(state => state.user)
	const toast = useToast()
	const [registerValues, setRegisterValues] = useState<FormikValues>({})
	const [registerScreenType, setRegisterScreenType] = useState<
		'register' | 'verify'
	>('register')

	const onSubmit = (formikValues: FormikValues) => {
		setRegisterValues(formikValues)

		checkIsExistUser({
			phone: formikValues.phone,
			callback() {
				sendSmsVerification(formikValues)
			},
			error() {
				toast({
					title: 'Bul telefon nomeri arqali aldin dizimnen otilgen!',
					status: 'info',
					position: 'top',
				})
			},
		})
	}

	const sendSmsVerification = (
		formikValues: FormikValues | { phone: string }
	) => {
		sendSmsRegister({
			phone: formikValues.phone.split('+').join(''),
			callback() {
				toast({
					title: 'Telefoninizga jiberilgen kodti kiritin',
					status: 'success',
					position: 'top',
				})
				setRegisterScreenType('verify')
			},
			errorCallback() {
				toast({
					title: 'Qatelik juz berdi! Iltimas qayta urinip korin',
					status: 'error',
					position: 'top',
				})
			},
		})
	}

	const onRegister = () => {
		register({
			fullName: registerValues.fullName,
			phone: registerValues.phone,
			password: registerValues.password,
			callback() {
				toast({
					title: 'Siz awmetli dizimnen ottiniz!',
					status: 'success',
					position: 'top',
				})

				router.push('/')
			},
			error() {
				toast({
					title: 'Qatelik juz berdi! Iltimas qayta urinip korin!',
					status: 'warning',
					position: 'top',
				})
			},
		})
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
			<Box
				pos={'absolute'}
				w={'400px'}
				h={'400px'}
				rounded={'full'}
				top={'-160px'}
				left={'-100px'}
				bg={'brand.500'}
				zIndex={'-1'}
				opacity={'.5'}
			></Box>
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
					<Image
						src={'/light-logo.svg'}
						onClick={() => router.push('/')}
						cursor={'pointer'}
						textTransform={'uppercase'}
						width={120}
					/>
				</Heading>

				<HStack spacing={'40px'}>
					<Button variant={'link'} onClick={() => router.push('/login')}>
						Kiriw
					</Button>
					<Button
						display={{
							base: 'none',
							md: 'block',
						}}
						colorScheme='brand'
						variant={'solid'}
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
			<Box
				flex={1}
				mt={{
					base: '100px',
					md: '100px',
					lg: '110px',
				}}
				p={6}
			>
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
					{registerScreenType === 'register' ? (
						<Formik
							validationSchema={AuthValidators.register()}
							initialValues={{
								fullName: '',
								phone: '',
								password: '',
							}}
							onSubmit={onSubmit}
						>
							<Form>
								<Stack>
									<TextField
										name='fullName'
										label='At familiya'
										placeholder='Jasur Bazarbaev'
										type='text'
									/>
									<TextField
										name='phone'
										label='Telefon nomeri'
										placeholder='+998905005050'
										type='text'
									/>
									<TextField
										name='password'
										label='Parol'
										placeholder='Parol'
										type='password'
									/>
									<Button
										isLoading={isLoading}
										mt={'20px'}
										colorScheme='brand'
										h={14}
										type='submit'
									>
										Dizimnen otiw
									</Button>
									<Button
										mt={4}
										display={{
											base: 'block',
											md: 'none',
										}}
										variant={'link'}
										onClick={() => router.push('/login')}
									>
										Sizde alleqashan akkount barma?
									</Button>
								</Stack>
							</Form>
						</Formik>
					) : (
						<RegisterSmsVerify
							phone={registerValues.phone}
							onOk={onRegister}
							reSendCode={sendSmsVerification}
							registerScreenType={registerScreenType}
							setRegisterScreenType={setRegisterScreenType}
						/>
					)}
				</Box>
			</Box>
		</Box>
	)
}

export default RegisterPageComponent
