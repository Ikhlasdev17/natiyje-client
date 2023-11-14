import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { Box, Button, useToast } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'
import SmsVerify from '../sms/sms-verificator'

const RegisterSmsVerify: FC<{
	phone: string
	onOk: () => void
	reSendCode: (data: { phone: string }) => void
	setRegisterScreenType: (type: 'register' | 'verify') => void
	registerScreenType: string
}> = ({
	phone,
	onOk,
	reSendCode,
	setRegisterScreenType,
	registerScreenType,
}) => {
	const { verifyOTP } = useActions()
	const { isLoading } = useTypedSelector(state => state.user)
	const toast = useToast()
	const [countDown, setCountDown] = useState(true)
	const [minutes, setMinutes] = useState(1)
	const [seconds, setSeconds] = useState(0)

	const verify = (code: string) => {
		verifyOTP({
			phone: phone.split('+').join(''),
			otp: code,
			callback() {
				onOk()
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
	}, [registerScreenType])

	return (
		<Box>
			<SmsVerify onChange={verify} />

			<Box mt={12} gap={4}>
				<Button
					onClick={() => {
						setCountDown(true)
						setMinutes(1)
						setSeconds(59)
						reSendCode({ phone: phone })
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
					onClick={() => setRegisterScreenType('register')}
					variant={'link'}
				>
					Telefon nomerin ozgertiw
				</Button>
			</Box>
		</Box>
	)
}

export default RegisterSmsVerify
