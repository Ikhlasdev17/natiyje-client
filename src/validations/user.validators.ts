import * as yup from 'yup'

export const updateUserDataForm = () =>
	yup.object({
		fullName: yup.string().required('FIO toltiriliwi shart!'),
		phone: yup.string().required('Telefon nomeri toltirilmadi!'),
		birthday: yup.string().required('Iltimas, tuwilgan sanenizdi de kiritin!'),
		address: yup.string().required('Iltimas, adresinizdi de kiritin!'),
	})

export const reviewLessonValidator = () =>
	yup.object({
		rate: yup
			.number()
			.max(5)
			.min(1)
			.required('Sabaq ushin neshe ball beresiz?'),
		text: yup.string().required('Iltimas, pikirinizdi jazin!'),
	})
