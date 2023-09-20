import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	InputGroup,
	useColorModeValue,
} from '@chakra-ui/react'
import { ErrorMessage, FieldHookConfig, useField } from 'formik'
import { FC } from 'react'
import { TextFieldPropsType } from './text-field.props'

const TextField: FC<TextFieldPropsType & FieldHookConfig<string>> = ({
	children,
	label,
	placeholder,
	type,
	readOnly,
	...props
}) => {
	const [field, meta] = useField(props)

	return (
		<FormControl isRequired isInvalid={!!meta.touched && !!meta.error} mt={5}>
			<FormLabel
				fontSize={'18px'}
				fontWeight={'400'}
				color={useColorModeValue('textColor', 'white')}
			>
				{label}
			</FormLabel>
			<InputGroup>
				<Input
					p={'18px'}
					borderRadius={'5px'}
					borderColor={'#CAC6D4'}
					focusBorderColor='facebook.500'
					type={type}
					placeholder={placeholder}
					h={14}
					{...field}
					required={false}
					readOnly={readOnly || false}
				/>
			</InputGroup>
			<FormErrorMessage>
				<ErrorMessage name={field.name} />
			</FormErrorMessage>
		</FormControl>
	)
}

export default TextField
