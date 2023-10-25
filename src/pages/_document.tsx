import { Head, Html, Main, NextScript } from 'next/document'
import { useEffect, useState } from 'react'

export default function Document() {
	const [title, setTitle] = useState(
		'Natiyje.uz - Siz kutkennende joqari natiyje ushin!'
	)
	function titleMarquee() {
		setTitle(title.substring(1) + title.substring(0, 1))
		setTimeout(titleMarquee, 200)
	}

	useEffect(() => {
		titleMarquee()
	}, [title])

	return (
		<Html lang='en'>
			<Head>
				<link rel='icon' href='/favicon4.svg' />
				<title>
					<>{title}</>
				</title>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
