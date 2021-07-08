import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'; // https://www.npmjs.com/package/@react-google-maps/api
import { GOOGLE_API_KEY } from "../../config";

const containerStyle = {
    width: '800px',
    height: '400px'
};
  
export default function Map({coords, setCoords}) {

    return (
        <div>
            <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
                <GoogleMap 
                mapContainerStyle={containerStyle}
                center={coords}
                zoom={2}
                onClick={ev => {
                    setCoords({lat: ev.latLng.lat(), lng: ev.latLng.lng()})
                    console.log(coords);
                  }}>
                    <Marker position={coords} />
                </GoogleMap>
            </LoadScript>
        </div>
    )
}
