import { useTypedSelector } from '@/hooks/useTypedSelector'
import { CreateUserType, RoleUser } from '@/interfaces/user.interface'
import { createUserValidator } from '@/validations/user.validators'
import { Box, Button, FormLabel, Select, Text } from '@chakra-ui/react'
import { Form, Formik, FormikValues } from 'formik'
import { FC, useEffect, useState } from 'react'
import TextField from '../text-field/text-field'

interface UserRolesOptionType {
	label: string
	value: RoleUser
}

const UserRolesArr: UserRolesOptionType[] = [
	{ label: 'User', value: 'USER' },
	{ label: 'Admin', value: 'ADMIN' },
	{ label: 'Instructor', value: 'INSTRUCTOR' },
	{ label: 'CEO', value: 'CEO' },
]

interface Props {
	onComplete: (formikValues: CreateUserType) => void
	updatingUserData: CreateUserType | null
}

const CreateUserForm: FC<Props> = ({ onComplete, updatingUserData }) => {
	const [initialFormData, setInitialFormData] = useState<CreateUserType>({
		phone: '',
		password: '',
		role: 'USER',
		fullName: '',
	})
	const { isLoading } = useTypedSelector(state => state.user)
	const onSubmit = (formikValues: FormikValues) => {
		onComplete(formikValues as CreateUserType)
	}

	useEffect(() => {
		if (updatingUserData) setInitialFormData(updatingUserData)
	}, [updatingUserData])

	return (
		<Box>
			<Formik
				initialValues={initialFormData}
				onSubmit={onSubmit}
				validationSchema={createUserValidator()}
				enableReinitialize
			>
				{formik => (
					<Form>
						<TextField
							placeholder='+998903332244'
							name='phone'
							label='Telefon nomer'
						/>
						<TextField name='password' label='Parol' />
						<TextField name='fullName' label='FIO' />
						<Box my={3}>
							<FormLabel mb={3}>
								Role{' '}
								<Box as={'span'} color={'red.300'}>
									*
								</Box>
							</FormLabel>

							<Select
								value={formik.values.role}
								onChange={e => formik.setFieldValue('role', e.target.value)}
							>
								{UserRolesArr.map(item => (
									<option key={item.label} value={item.value}>
										{item.label}
									</option>
								))}
							</Select>

							{formik.errors.role && formik.touched.role && (
								<Text mt={2} fontSize='14px' color='red.500'>
									{formik.errors.role}
								</Text>
							)}
						</Box>
						<Button
							isLoading={isLoading}
							type='submit'
							colorScheme='facebook'
							h={14}
							mt={2}
							w={'full'}
						>
							Save
						</Button>
					</Form>
				)}
			</Formik>
		</Box>
	)
}

export default CreateUserForm
