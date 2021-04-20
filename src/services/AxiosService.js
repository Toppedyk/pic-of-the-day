import axios from 'axios'

export const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=s87stGdeUwnjSDkCvHZAdvyE6KWFHhJTeS9uSyrQ',
  timeout: 3000
})
