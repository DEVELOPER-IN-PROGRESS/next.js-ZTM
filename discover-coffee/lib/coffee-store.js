import { createApi } from 'unsplash-js' ;

//node server 
const unsplashApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS, 
})

const getUrlfn = (ll, query , limit) => {
  return `https://api.foursquare.com/v2/venues/search?ll=${ll}&query=${query}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&v=20211108&limit=${limit}` ;
}


const getApiPhotos = async () => {
  const photos = await unsplashApi.search.getPhotos({
    query:'coffee shop',
    per_page: '10', 
}); 
const unsplashResults = photos.response.results ; 
return  unsplashResults.map(result => result.urls['small']);
  
};


export const fetchCoffeeStores = async () => {
  
  const photoList = await  getApiPhotos();
const response = await  fetch( getUrlfn("43.65 , -79" , "coffee store" , 6) )

const data =await  response.json() 
console.log("data" , data);
return data.response.venues.map( (venue,index) => {
    return {
      ...venue,
      id: venue.id, 
      address: venue.location.address || "",
      name: venue.name,
      neighbourhood:
        venue.location.neighborhood || venue.location.crossStreet || "",
      imgUrl: photoList[index],
    }
  }); 
}