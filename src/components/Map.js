import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'; // https://www.npmjs.com/package/@react-google-maps/api
import { GOOGLE_API_KEY } from "../config";

const containerStyle = {
    width: '100%',
    height: '400px'
};
  
export default function Map({latitude, longitude}) {

    const center = {
        lat: Number(latitude),
        lng: Number(longitude)
    };

    function getInfo(e){
        console.log(e.target);
    }

    // https://developers.google.com/maps/documentation/javascript/examples/event-click-latlng#maps_event_click_latlng-javascript

    // https://stackoverflow.com/questions/65399542/react-google-maps-api-how-to-search-current-location-for-a-search-result

    return (
        <div onClick={(e) => getInfo(e)}>
            <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                    { /* Child components, such as markers, info windows, etc. */ }
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </div>
    )
}
