import { createApi } from 'unsplash-js' ;

//node server 
const unsplashApi = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS, 
})

const getUrlfn = (ll, query , limit) => {
  return `https://api.foursquare.com/v2/venues/search?ll=${ll}&query=${query}&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_CLIENT_SECRET}&v=20211108&limit=${limit}` ;
}


const getApiPhotos = async () => {
  const photos = await unsplashApi.search.getPhotos({
    query:'coffee shop',
    per_page: '40', 
}); 
const unsplashResults = photos.response.results ; 
return  unsplashResults.map(result => result.urls['small']);
  
};


export const fetchCoffeeStores = async (latLong ="43.65 , -79.395", limit = 6 ) => {
  
  const photoList = await  getApiPhotos();
const response = await  fetch( getUrlfn(latLong , "coffee store" , limit ) )

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