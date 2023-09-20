import { Box, FormLabel, Text } from '@chakra-ui/react'
import { TagsInput } from 'react-tag-input-component'
import { TagFieldProps } from './tags-field.props'

const TagField = ({
	formik,
	label,
	name,
	placeholder,
	errorMessage,
	values,
}: TagFieldProps) => {
	return (
		<Box w={'full'} my={3}>
			<FormLabel>
				{label}{' '}
				<Box as={'span'} color={'red.300'}>
					*
				</Box>
			</FormLabel>
			<TagsInput
				value={values}
				onChange={data => formik.setFieldValue(name, data)}
				name={name}
				placeHolder={placeholder}
			/>
			{errorMessage && (
				<Text mt={2} fontSize='14px' color='red.500'>
					{errorMessage}
				</Text>
			)}
		</Box>
	)
}

export default TagField
