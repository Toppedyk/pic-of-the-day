import { AppState } from '../AppState'
import Picture from '../models/Picture'
import { nasaApi } from './AxiosService'

class PicturesService {
  async getPicture () {
    const res = await nasaApi.get()
    console.log(res.data)
    AppState.picture = new Picture(res.data)
  }
}

export const picturesService = new PicturesService()
