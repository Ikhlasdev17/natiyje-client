import { HStack, PinInput, PinInputField } from '@chakra-ui/react'

export interface SmsVerifyProps {
	onChange: (value: string) => void
}

const SmsVerify = ({ onChange }: SmsVerifyProps) => {
	return (
		<HStack>
			<PinInput onComplete={onChange}>
				<PinInputField />
				<PinInputField />
				<PinInputField />
				<PinInputField />
				<PinInputField />
				<PinInputField />
			</PinInput>
		</HStack>
	)
}

export default SmsVerify
