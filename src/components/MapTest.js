import React from "react"
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"
import { GOOGLE_MAP_URL } from "../constants"

function Map() {
    return (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: 37.7749, lng: -122.4194}}
        />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function MapTest() {
    return(
        <div style={{ height: "100%" }} >
            <WrappedMap
                googleMapURL={`${GOOGLE_MAP_URL}`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
        </div>
    );
}