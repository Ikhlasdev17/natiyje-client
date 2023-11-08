import * as Yup from 'yup'
export const createCourseValidator = () =>
	Yup.object({
		title: Yup.string().required('Title is required!'),
		price: Yup.number().required(),
		description: Yup.string().required('Description is required!'),
		excerpt: Yup.string().required('Excerpt is required!'),
		level: Yup.string().required('Level is required!'),
		embedVideo: Yup.string()
			.url('Video manzili qate korsetilgen!')
			.required('Video url is required!'),
	})
