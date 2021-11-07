

export  const fetchCoffeestores = async () => {
    const response = fetch(`https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857
    &query=coffee stores&client_id=${process.env.CLIENT}
    &client_secret=${process.env.SECRET}
    &v=20210525&LIMIT=6`) ;
    
    const data = await response.json();
    console.log(data);

    return data;
}