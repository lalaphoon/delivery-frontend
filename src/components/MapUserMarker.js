import React from 'react';
import {
    Marker
} from "react-google-maps";

export class MapUserMarker extends React.Component {

    render() {
        const { label, lng, lat } = this.props.markerInfo;
        return (
            <Marker
                position={{ lat: lat, lng: lng}}
                label={label}
            >
            </Marker>
        );
    }
}
