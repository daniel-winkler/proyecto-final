import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'; // https://www.npmjs.com/package/@react-google-maps/api
import { GOOGLE_API_KEY } from "../../config";

const containerStyle = {
    width: '100%',
    height: '400px'
};
  
export default function Map({latitude=0, longitude=0}) { // añadimos valores por defecto para que no nos devuelva un error NaN

    const center = {
        lat: parseFloat(latitude),
        lng: parseFloat(longitude)
    };

    return (
        <div>
            <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15} >
                    <Marker
                    onClick={() => {
                        window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`, "_blank");
                    }}
                    position={center} />
                </GoogleMap>
            </LoadScript>
        </div>
    )
}
