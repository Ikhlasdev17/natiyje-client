import { getCreateVideoUrl, getFileUrl } from '@/api/api.constants'
import $axios from '@/api/api.interceptor'
import { ImageFileResponseType } from '@/interfaces/file.interface'
import axios from 'axios'
export const FileService = {
	async uploadVideo(video: File, folderId: string = '36850') {
		const formData = new FormData()
		formData.append('vooKey', 'jZREExXWSTf41KvoqVFE2EqB0')
		formData.append('name', 'Upload from API')
		formData.append('customS3', '0')
		formData.append('videoGroup', folderId)
		formData.append('create', '1')
		formData.append('hls', '1')
		formData.append('file', video)

		const response = await axios.post(getCreateVideoUrl(), formData)
		return response.data
	},
	async getVideoProjects() {
		const response = await axios.get('https://api.spotlightr.com/groups', {
			params: {
				vooKey: 'jZREExXWSTf41KvoqVFE2EqB0',
			},
		})
		return response.data
	},
	async uploadImage(
		file: File,
		folder: string = 'default'
	): Promise<ImageFileResponseType | null> {
		const formData = new FormData()
		formData.append('image', file)
		const response = await $axios.post<ImageFileResponseType>(
			getFileUrl(`upload?folder=${folder}`),
			formData
		)
		if (response.status !== 200) return null

		return response?.data
	},
}
