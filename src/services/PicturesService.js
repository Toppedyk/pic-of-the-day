import { AppState } from '../AppState'
import Picture from '../models/Picture'
import { nasaApi } from './AxiosService'

class PicturesService {
  queryString = '?api_key=s87stGdeUwnjSDkCvHZAdvyE6KWFHhJTeS9uSyrQ&date='
  async getPicture (query) {
    const res = await nasaApi.get(this.queryString + query)
    console.log(res.data)
    AppState.picture = new Picture(res.data)
  }
}

export const picturesService = new PicturesService()
