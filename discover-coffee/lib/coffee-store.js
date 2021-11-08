const getUrlfn = (ll, query , limit) => {
  return `https://api.foursquare.com/v2/venues/search?ll=${ll}&query=${query}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&v=20211108&limit=${limit}` ;
}

export const fetchCoffeeStores = async () => {
const response = await  fetch( getUrlfn("43.65 , -79" , "coffee store" , 6) )

const data =await  response.json() 
console.log("data" , data);
return data.response.venues  ; 
}