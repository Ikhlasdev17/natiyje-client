import {
	BsChatLeftDots,
	BsLayers,
	BsShieldCheck,
	BsUiChecksGrid,
} from 'react-icons/bs'
import { PiChalkboardTeacherLight, PiStudentDuotone } from 'react-icons/pi'

export const headerMenuItems = [
	{ id: 1, label: 'Bas bet', path: '/' },
	{ id: 2, label: 'Kurslar', path: '/courses' },
	{ id: 3, label: 'Blog', path: '/blog' },
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
		label: 'Oqiwshilar',
		path: '/admin-page/students',
		icon: PiStudentDuotone,
	},
	{
		id: 4,
		label: 'Mentorlar',
		path: '/admin-page/instructors',
		icon: PiChalkboardTeacherLight,
	},
	{
		id: 5,
		label: 'Adminler',
		path: '/admin-page/employee',
		icon: BsShieldCheck,
	},
	{ id: 6, label: 'Bloglar', path: '/admin-page/blogs', icon: BsChatLeftDots },
]
