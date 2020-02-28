import React from 'react';
import {
    Marker,
    InfoWindow
} from "react-google-maps";
import "../styles/MapDistriStatMarker.css"

export class MapDistriStatMarker extends React.Component {

    render() {
        const { station_name, robot, station_id, lon, lat, drone } = this.props.locationInfo;
        return (
            <Marker
                 position={{ lat: lat, lng: lon}}
            >
                {(
                            <InfoWindow onCloseClick={this.onToggleOpen}>
                                <div>
                                    {`${station_id} : ${station_name}`}
                                </div>
                            </InfoWindow>

                )}
            </Marker>
        );
    }
}
