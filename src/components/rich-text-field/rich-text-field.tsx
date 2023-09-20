import { Box } from '@chakra-ui/react'
import 'froala-editor/css/froala_editor.pkgd.min.css'
import 'froala-editor/css/froala_style.min.css'
import dynamic from 'next/dynamic'
const FroalaEditorComponent = dynamic(
	async () => {
		const values = await Promise.all([
			import('react-froala-wysiwyg'), // must be first import since we are doing values[0] in return
			import('froala-editor/js/plugins.pkgd.min.js'),
			import('froala-editor/js/plugins/align.min.js'),
		])
		return values[0]
	},
	{
		loading: () => <p>LOADING!!!</p>,
		ssr: false,
	}
)
const RichTextField = ({
	model,
	setModel,
}: {
	model: string
	setModel: (text: string) => void
}) => {
	const handleModelChange = (event: string) => {
		setModel(event)
	}

	return (
		<Box zIndex={'50'} minHeight={'30vh'} my={4}>
			<FroalaEditorComponent
				tag='textarea'
				onModelChange={handleModelChange}
				model={model}
			/>
		</Box>
	)
}

export default RichTextField
