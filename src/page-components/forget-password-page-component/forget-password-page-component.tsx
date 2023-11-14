import { SmsVerify, UpdatePassword } from '@/components'
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
import { useEffect, useState } from 'react'

const LoginPageComponent = () => {
	const { sendSmsForgetPass, verifyOTP } = useActions()
	const router = useRouter()
	const { isLoading } = useTypedSelector(state => state.user)
	const [forgetScreenType, setForgetScreenType] = useState<
		'forget' | 'verify' | 'password'
	>('forget')
	const toast = useToast()
	const [countDown, setCountDown] = useState(true)
	const [minutes, setMinutes] = useState(1)
	const [seconds, setSeconds] = useState(0)
	const [phone, setPhone] = useState('')

	const onSubmit = (formData: FormikValues) => {
		setPhone(formData.phone)
		sendSmsForgetPass({
			phone: formData.phone.split('+').join(''),
			callback() {
				toast({
					title: "Telefonin'izg'a jiberilgen kodti kiritin!",
					status: 'success',
					position: 'top',
				})
				setForgetScreenType('verify')
			},
			errorCallback() {
				toast({
					title: 'Qatelik juz berdi! Iltimas qayta urinip korin.',
					status: 'warning',
					position: 'top',
				})
				setForgetScreenType('forget')
			},
		})
	}

	const onVerify = (code: string) => {
		verifyOTP({
			phone: phone.split('+').join(''),
			otp: code,
			callback() {
				toast({
					title: "Jan'a parol kiritin!",
					status: 'success',
					position: 'top',
				})
				setForgetScreenType('password')
			},
			error() {
				toast({
					title: 'Kod qate kiritildi, qayta urinip korin!',
					status: 'warning',
					position: 'top',
				})
			},
		})
	}

	useEffect(() => {
		if (countDown) {
			const count = setInterval(() => {
				if (seconds !== 0) {
					setSeconds(seconds - 1)
				}

				if (seconds === 0 && minutes !== 0) {
					setMinutes(minutes - 1)
					setSeconds(60)
				}

				if (seconds === 0 && minutes === 0) {
					setCountDown(false)
				}
			}, 1000)

			return () => clearInterval(count)
		}
	}, [countDown, seconds, minutes])

	useEffect(() => {
		setCountDown(true)
		setMinutes(2)
		setSeconds(0)
	}, [forgetScreenType])

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
					<Image
						src={'/light-logo.svg'}
						onClick={() => router.push('/')}
						cursor={'pointer'}
						textTransform={'uppercase'}
						width={120}
					/>
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
						Forget Password
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
					{forgetScreenType === 'forget' ? (
						<Formik
							validationSchema={AuthValidators.forgetPass()}
							initialValues={{
								phone: '',
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
									<Button
										isLoading={isLoading}
										mt={'20px'}
										colorScheme='brand'
										h={14}
										type='submit'
									>
										Tastiyqlaw
									</Button>
								</Stack>
							</Form>
						</Formik>
					) : forgetScreenType === 'verify' ? (
						<>
							<SmsVerify onChange={onVerify} />
							<Box mt={12} gap={4}>
								<Button
									onClick={() => {
										setCountDown(true)
										setMinutes(1)
										setSeconds(59)
										onSubmit({ phone: phone })
									}}
									isDisabled={countDown}
									variant={'link'}
								>
									Qayta kod jiberiw{' '}
									{minutes === 0 && seconds === 0
										? null
										: minutes < 10
										? `0${minutes}`
										: minutes}
									{minutes === 0 && seconds === 0 ? null : ':'}
									{minutes === 0 && seconds === 0
										? null
										: seconds < 10
										? `0${seconds}`
										: seconds}
								</Button>
								<br></br>
								<Button
									onClick={() => setForgetScreenType('forget')}
									variant={'link'}
								>
									Telefon nomerin ozgertiw
								</Button>
							</Box>
						</>
					) : (
						<UpdatePassword phone={phone} />
					)}
				</Box>
			</Box>
		</Box>
	)
}

export default LoginPageComponent
