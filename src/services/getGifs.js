/*
const apiKey = 'vJWOHg9zPBYslUBt5HdRwR1X2f6C7ZXG'

export default function getGifs({keyword ='bebe'}={}){
    const apiURL ='https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en'
    return(
    fetch(apiURL)
    .then(res => res.json())
    .then(response =>{
      const {data} = response
      const gifs = data.map(image => image.images.downsized_medium.url)
      console.log(gifs)
      return (gifs)
    })
    )
}
*/
/* const apiKey = 'vJWOHg9zPBYslUBt5HdRwR1X2f6C7ZXG'

export default function getGifs({keyword ='bebe'}={}){
    const apiURL =`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
    return(
    fetch(apiURL)
    .then(res => res.json())
    .then(response =>{
      const {data} = response
      const gifs = data.map(image => {
        const {images,title,id} = image
        const {url} = images.downsized_medium 
        return {title, id, url}
    })
      return (gifs)
    })
    )
}
 */
import { API_KEY,API_URL } from "./settings"

const fromApiResponseToGifs = apiResponse =>{
  const {data = []} = apiResponse
  if (Array.isArray(data)){
    const gifs = data.map(image =>{
      const {images, title, id} = image
      const { url } = images.downsized_medium
      return { title, id, url }
    })
    return gifs
  }
  return []
}

export default function getGifs ({limit = 25, keyword ='bebe'}={}){
  const apiURL =`${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`
  return fetch(apiURL)
  .then(res=>res.json())
  .then(fromApiResponseToGifs)
}