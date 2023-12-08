import { CourseType } from '@/interfaces/course.interface'
import { LessonType } from '@/interfaces/section.interface'
import { BsChatLeftDots, BsLayers, BsUiChecksGrid } from 'react-icons/bs'
import { PiStudentDuotone } from 'react-icons/pi'

export const headerMenuItems = [
	{ id: 1, label: 'Bas bet', path: '/' },
	{ id: 2, label: 'Kurslar', path: '/courses' },
	// { id: 3, label: 'Blog', path: '/blog' },
	{ id: 4, label: 'Mentorlarimiz', path: '/instructors' },
	{ id: 5, label: 'Baylanis', path: '/contact' },
]

export const sections = [
	{
		id: 1,
		title: '#1-modul. Html, css, javascript tiykarlari',
		lessons: [
			{ title: '1. HTML - Kirisiw', duration: '18 minut', embedVideo: '<></>' },
			{ title: '2. Text taglari', duration: '42 minut' },
			{ title: '3. Image, link, list', duration: '24 minut' },
		],
	},
	{
		id: 2,
		title: '#2-modul. Nodejs tiykarlari',
		lessons: [{ title: '1. Nodejsti ornatiw', duration: '22 minut' }],
	},
	{
		id: 2,
		title: '#3-modul. Expressjs',
		lessons: [{ title: '1. Nodejsti ornatiw', duration: '22 minut' }],
	},
	{
		id: 2,
		title: '#4-modul. Mongodb kirisiw',
		lessons: [{ title: '1. Nodejsti ornatiw', duration: '22 minut' }],
	},
	{
		id: 2,
		title: '#5-modul. MERN Proekt',
		lessons: [{ title: '1. Nodejsti ornatiw', duration: '22 minut' }],
	},
]

export const adminSidebarMenus = [
	{ id: 1, label: 'Dashboard', path: '/admin-page', icon: BsUiChecksGrid },
	{ id: 2, label: 'Kurslar', path: '/admin-page/courses', icon: BsLayers },
	{
		id: 3,
		label: 'Users',
		path: '/admin-page/users',
		icon: PiStudentDuotone,
	},
	{ id: 6, label: 'Bloglar', path: '/admin-page/blogs', icon: BsChatLeftDots },
]

export const initialCourseData: CourseType = {
	title: '',
	description: null,
	excerpt: '',
	price: null,
	image: '',
	learn: [],
	requirements: [],
	tags: [],
	level: '',
	category: '',
	embedVideo: '',
	teacher: '',
}

export const initialLessonCreateFormData: LessonType = {
	name: '',
	material: '',
	minute: 0,
	second: 0,
	hour: 0,
	embedVideo: '',
}

export const profileSettingsFormData = {
	fullName: '',
	birthday: '',
	phone: '',
	address: '',
	bio: '',
}

export const instructors = [
	{
		_id: 1,
		fullName: 'Ikhlas Aralbaev',
		avatar:
			'https://avatars.mds.yandex.net/i?id=a210f77f4edad7e9170549fdc3919d47_l-5288772-images-thumbs&n=13',
		rate: 4.5,
		instagram: 'https://instagram.com',
		telegram: 'https://t.me/ikhlasaralbaev',
		linkedin: 'https://linkedin.com',
	},
	{
		_id: 2,
		fullName: 'John Doe',
		avatar:
			'https://www.sknclinics.co.uk/wp-content/uploads/2021/05/shutterstock_315520139-scaled.jpg',
		rate: 5,
		instagram: 'https://instagram.com',
		telegram: 'https://t.me/ikhlasaralbaev',
		linkedin: 'https://linkedin.com',
	},
	{
		_id: 3,
		fullName: 'Adam Watson',
		avatar:
			'https://avatars.mds.yandex.net/i?id=5b600fed7ecfcbad588987198d0eea74_l-5747194-images-thumbs&n=13',
		rate: 5,
		instagram: 'https://instagram.com',
		telegram: 'https://t.me/ikhlasaralbaev',
		linkedin: 'https://linkedin.com',
	},
	{
		_id: 4,
		fullName: 'Mark Jhonson',
		avatar:
			'https://avatars.mds.yandex.net/i?id=ccaa6eca9f9cde26f57ed573495f4448_l-8425275-images-thumbs&n=13',
		rate: 4.5,
		instagram: 'https://instagram.com',
		telegram: 'https://t.me/ikhlasaralbaev',
		linkedin: 'https://linkedin.com',
	},
]
