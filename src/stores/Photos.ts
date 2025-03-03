import { defineStore } from 'pinia'
import axios from 'axios'

export type Photo = {
  id: number
  albumId: number
  title: string
  url: string
  thumbnailUrl: string
}

export const usePhotosStore = defineStore('photos', {
  state: () => ({
    photos: [] as Photo[],
    displayedPhotos: [] as Photo[],
    loading: false,
    error: null as string | null,
    selectedAlbumIds: [] as number[],
    isSorted: false,
  }),

  actions: {
    async fetchPhotos(albumIds: number[] = []) {
      this.loading = true
      this.error = null
      this.isSorted = false
      try {
        let url = 'https://jsonplaceholder.typicode.com/photos'
        if (albumIds.length > 0) {
          url += '?' + albumIds.map(id => `albumId=${id}`).join('&')
        }
        const response = await axios.get<Photo[]>(url)
        this.photos = response.data
        this.displayedPhotos = this.photos.slice(0, 30)
      } catch (error) {
        this.error = 'Ошибка при загрузке фотографий'
        console.error('Error fetching photos:', error)
      } finally {
        this.loading = false
      }
    },

    loadMorePhotos() {
      if (this.isSorted) return
      const currentLength = this.displayedPhotos.length
      const newPhotos = this.photos.slice(currentLength, currentLength + 20)
      this.displayedPhotos.push(...newPhotos)
    },

    setSelectedAlbumIds(ids: string) {
      this.selectedAlbumIds = ids
        .split(' ')
        .map(id => parseInt(id.trim()))
        .filter(id => !isNaN(id))
    },

    sortPhotos(key: keyof Photo, order: 'asc' | 'desc') {
      const sortedPhotos = [...this.photos].sort((a, b) => {
        if (order === 'asc') {
          return a[key] > b[key] ? 1 : -1
        } else {
          return a[key] < b[key] ? 1 : -1
        }
      })
      
      this.displayedPhotos = sortedPhotos.slice(0, 30)
      this.isSorted = true
    },
  },
}) 