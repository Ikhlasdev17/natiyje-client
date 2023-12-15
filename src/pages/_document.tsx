import { Head, Html, Main, NextScript } from 'next/document'
import { useState } from 'react'

export default function Document() {
	const [title, setTitle] = useState(
		'Natiyje.uz - Siz kutkennende joqari natiyje ushin!'
	)

	return (
		<Html lang='en'>
			<Head>
				<script src='https://my.click.uz/pay/checkout.js'></script>

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
