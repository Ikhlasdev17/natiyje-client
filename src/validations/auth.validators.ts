import * as Yup from 'yup'

import YupPassword from 'yup-password'
YupPassword(Yup)

export const AuthValidators = {
	register: () =>
		Yup.object({
			fullName: Yup.string().required('Iltimas at familiyanizdi kiritin!'),
			phone: Yup.string().required('Telefon nomerin kiritiwdi umittiniz!'),
			password: Yup.string()
				.min(6, 'Parol 6 belgiden kem bolmawi kerek!')
				.required('Paroldi kiritiwdi umittiniz!'),
		}),
	login: () =>
		Yup.object({
			phone: Yup.string().required('Telefon nomerin kiritiwdi umittiniz!'),
			password: Yup.string()
				.min(6, 'Parol 6 belgiden kem bolmawi kerek!')
				.required('Paroldi kiritiwdi umittiniz!'),
		}),
	forgetPass: () =>
		Yup.object({
			phone: Yup.string().required('Telefon nomerin kiritiwdi umittiniz!'),
		}),
	updatePass: () =>
		Yup.object().shape({
			password: Yup.string()
				.min(6, 'Minimum 6 belgi kiritin!')
				.required('Telefon nomerin kiritiwdi umittiniz!'),
			confirmPassword: Yup.string().oneOf(
				[Yup.ref('password')],
				'Paroller mas emes!'
			),
		}),
}
