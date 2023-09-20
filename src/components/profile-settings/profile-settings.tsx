import { profileSettingsFormData } from '@/config/constants'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { UserType } from '@/interfaces/user.interface'
import { updateUserDataForm } from '@/validations/user.validators'
import { Box, Button, Flex, useToast } from '@chakra-ui/react'
import { Form, Formik, FormikValues } from 'formik'
import { useEffect, useState } from 'react'
import TextAreaField from '../text-area-field/text-area-field'
import TextField from '../text-field/text-field'

const ProfileSettings = () => {
	const { user, isLoading } = useTypedSelector(state => state.user)
	const [initialValues, setInitialValues] = useState<UserType>(
		profileSettingsFormData
	)
	const { updateUserData } = useActions()
	const toast = useToast()

	const onSubmit = (formikValues: FormikValues) => {
		updateUserData({
			data: formikValues,
			callback() {
				toast({
					title: 'User data updated successful!',
					status: 'success',
					position: 'top',
				})
			},
		})
	}

	useEffect(() => {
		if (user) {
			setInitialValues(user)
		}
	}, [user])

	return (
		<Box>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={updateUserDataForm()}
				enableReinitialize
			>
				{formik => (
					<Form>
						<Flex w={'full'} gap={4}>
							<TextField
								name='fullName'
								label='FIO'
								placeholder='Ikhlas Aralbaev'
							/>
							<TextField name='birthday' label='Tuwilgan sane' type='date' />
						</Flex>
						<Flex w={'full'} gap={4}>
							<TextField
								name='phone'
								label='Telefon'
								placeholder='+998953555020'
								readOnly
							/>
							<TextField
								name='address'
								label='Manzil'
								placeholder='Qaraqalpaqstan, Shomanay'
							/>
						</Flex>
						<TextField
							name='email'
							label='Email'
							placeholder='example@gmail.com'
						/>
						<TextAreaField name='bio' label='Oziniz haqqinizda' />
						<Button
							isLoading={isLoading}
							mt={4}
							colorScheme='brand'
							type='submit'
						>
							Saqlaw
						</Button>
					</Form>
				)}
			</Formik>
		</Box>
	)
}

export default ProfileSettings
