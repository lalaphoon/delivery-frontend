import React from 'react';
import {
    Marker
} from "react-google-maps";
import blueMarker from '../assets/images/blue-marker.svg';

export class MapUserMarker extends React.Component {

    render() {
        const { label, lng, lat } = this.props.markerInfo;
        return (
            <Marker
                position={{ lat: lat, lng: lng}}
                label={label}
                icon={{
                    url: blueMarker,
                    scaledSize: new window.google.maps.Size(26, 41),
                }}
            >
            </Marker>
        );
    }
}
