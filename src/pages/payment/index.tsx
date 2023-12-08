const Index = () => {
	return (
		<div>
			<form method='POST' action='https://test.paycom.uz'>
				<input type='hidden' name='merchant' value='655d48902c3c619b5d42dbb7' />
				<input
					type='hidden'
					name='test_key'
					value='SRZ43UD1#B%X8mxD1efNPi9414e%HDSwkhaX'
				/>

				<input type='hidden' name='amount' value='50000' />

				<input type='hidden' name='account[phone]' value='+998953555020' />

				<input type='hidden' name='lang' value='uz' />

				<input
					type='hidden'
					name='callback'
					value='{url возврата после платежа}'
				/>

				<input type='hidden' name='callback_timeout' value='{miliseconds}' />

				<input type='hidden' name='description' value='{Описание платежа}' />

				<input
					type='hidden'
					name='detail'
					value='{JSON объект детализации в BASE64}'
				/>

				<button type='submit'>
					Оплатить с помощью <b>Payme</b>
				</button>
			</form>
		</div>
	)
}

export default Index
