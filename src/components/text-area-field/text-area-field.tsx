import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	InputGroup,
	Textarea,
	useColorModeValue,
} from '@chakra-ui/react'
import { ErrorMessage, FieldHookConfig, useField } from 'formik'
import { FC } from 'react'
import { TextAreaFieldPropsType } from './text-area-field.props'

const TextAreaField: FC<TextAreaFieldPropsType & FieldHookConfig<string>> = ({
	children,
	label,
	placeholder,
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
				<Textarea
					p={'18px'}
					borderRadius={'5px'}
					borderColor={'#CAC6D4'}
					focusBorderColor='facebook.500'
					placeholder={placeholder}
					h={14}
					required={false}
					{...field}
				/>
			</InputGroup>
			<FormErrorMessage>
				<ErrorMessage name={field.name} />
			</FormErrorMessage>
		</FormControl>
	)
}

export default TextAreaField
