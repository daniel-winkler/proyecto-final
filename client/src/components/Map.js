import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
  };
  
const center = {
    lat: -3.745,
    lng: -38.523
};

export default function Map() {
    return (
        <div>
            <LoadScript googleMapsApiKey="AIzaSyAZNFiayD6z5kWofd9MkPjZUj2eMO1Umls">
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                 { /* Child components, such as markers, info windows, etc. */ }
                </GoogleMap>
            </LoadScript>
        </div>
    )
}
