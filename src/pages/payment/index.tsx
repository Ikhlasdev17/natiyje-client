import { withLayout } from '@/layouts/layout'
import { PaymentPageComponent } from '@/page-components'

const Index = () => {
	return (
		<>
			<PaymentPageComponent />
		</>
	)
}

export default withLayout(Index)
