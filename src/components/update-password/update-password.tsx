import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { AuthValidators } from '@/validations/auth.validators'
import { Button, Stack, useToast } from '@chakra-ui/react'
import { Form, Formik, FormikValues } from 'formik'
import { useRouter } from 'next/router'
import { FC } from 'react'
import TextField from '../text-field/text-field'

interface Props {
	phone: string
}

const UpdatePassword: FC<Props> = ({ phone }) => {
	const { isLoading } = useTypedSelector(state => state.user)
	const { updatePassword } = useActions()
	const toast = useToast()
	const router = useRouter()

	const onSubmit = (formikValues: FormikValues) => {
		updatePassword({
			phone: phone,
			password: formikValues.password,
			callback() {
				toast({
					title: 'Paroliniz janalandi! :)',
					status: 'success',
					position: 'top',
				})
				router.push('/login')
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
		<div>
			<Formik
				validationSchema={AuthValidators.updatePass()}
				initialValues={{
					password: '',
					confirmPassword: '',
				}}
				onSubmit={onSubmit}
			>
				<Form>
					<Stack>
						<TextField
							name='password'
							label='Jana parol'
							placeholder='***'
							type='password'
						/>
						<TextField
							name='confirmPassword'
							label='Jana paroldi tastiyqlan'
							placeholder='***'
							type='password'
						/>
						<Button
							isLoading={isLoading}
							mt={'20px'}
							colorScheme='brand'
							h={14}
							type='submit'
						>
							Paroldi janalaw
						</Button>
					</Stack>
				</Form>
			</Formik>
		</div>
	)
}

export default UpdatePassword
