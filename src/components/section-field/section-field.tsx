import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	InputGroup,
	Select,
	useColorModeValue,
} from '@chakra-ui/react'
import { ErrorMessage, FieldHookConfig, useField } from 'formik'
import { FC } from 'react'
import { SectionFieldPropsType } from './section-field.props'

const SectionField: FC<SectionFieldPropsType & FieldHookConfig<string>> = ({
	children,
	label,
	placeholder,
	type,
	options,
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
				<Select
					p={'18px'}
					borderRadius={'5px'}
					borderColor={'#CAC6D4'}
					focusBorderColor='facebook.500'
					placeholder={placeholder}
					h={14}
					{...field}
				>
					<option value={''} disabled>
						{placeholder}
					</option>
					{options.map(item => (
						<option value={item.value} key={item.value}>
							{item.label}
						</option>
					))}
				</Select>
			</InputGroup>
			<FormErrorMessage>
				<ErrorMessage name={field.name} />
			</FormErrorMessage>
		</FormControl>
	)
}

export default SectionField
