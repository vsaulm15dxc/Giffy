const apikey ='UWvWgueZnVXZByEuPdHZd12HrN9LN8RP'

export default function getGifs ( {keyword ='morty'}= {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`


 return fetch(apiURL)
    .then(res => res.json())
    .then(Response => {
      const {data = []} = Response
      if(Array.isArray(data)){
      const  gifs = data.map(image =>{
        const {images,title, id} = image
       const {url}= images.downsized_medium
      return {title, id, url}
      })
      return gifs
    }
})
}