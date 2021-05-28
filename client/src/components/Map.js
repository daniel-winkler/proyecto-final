import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
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

    return (
        <div>
            <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                    { /* Child components, such as markers, info windows, etc. */ }
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </div>
    )
}
