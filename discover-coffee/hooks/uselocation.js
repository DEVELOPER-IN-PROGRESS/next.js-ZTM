import { useContext, useState } from "react";

const useGeoLocation  = () => { 
    const [lErrorMsg , setLocationErrorMsg ] = useState(''); 

    const [latLong, setlatLong] = useState('') ; 

    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setlatLong(`${latitude}` ,`${longitude}`);
        setLocationErrorMsg('');
    }

    const error = () => {
            setLocationErrorMsg("Unable to retrieve your location");

    }

    const handleLocation = () => {
        if (!navigator.geolocation) {
            setLocationErrorMsg("Geolocation is not supported by your browser");
            setIsFindingLocation(false);
          } else {
           // status.textContent = "Locating…";
            navigator.geolocation.getCurrentPosition(success, error);
          }
    }
  
    return {
        latLong ,
        handleLocation , 
        lErrorMsg , 
    }
}

export default useGeoLocation ;