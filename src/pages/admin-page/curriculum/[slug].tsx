import { withAdminLayout } from '@/layouts/admin-layout'
import CurriculumPageComponent from '@/page-components/admin-page-component/curriculum-page-component'
import { FileService } from '@/services/file.service'
import { GetServerSideProps } from 'next'

const Curriculum = () => {
	return (
		<>
			<CurriculumPageComponent />
		</>
	)
}

export default withAdminLayout(Curriculum)

export const getServerSideProps: GetServerSideProps = async () => {
	const folders = await FileService.getVideoProjects()

	return {
		props: {
			fileFolders: folders,
		},
	}
}
