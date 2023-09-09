import * as Yup from 'yup'

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
}
