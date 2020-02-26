import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { GOOGLE_MAP_URL } from "../constants";
import { MapDistriStatMarker} from "./MapDistriStatMarker";

class MapFunc extends React.Component {

    render()
    {
        return (

            <GoogleMap
                defaultZoom={12}
                defaultCenter={{lat: 37.7749, lng: -122.4194}}>
                {
                    this.props.locations.map((ds) => (
                        <MapDistriStatMarker
                            locationInfo = {ds}
                            key={ds.station_id}
                        />
                    ))
                }
            </GoogleMap>
        );
    }
}

const WrappedMap = withScriptjs(withGoogleMap(MapFunc));

export class Map extends React.Component{


    render() {

        return (
            <div style={{height: "100%"}}>
                <WrappedMap
                    googleMapURL={`${GOOGLE_MAP_URL}`}
                    loadingElement={<div style={{height: "100%"}}/>}
                    containerElement={<div style={{height: "100%"}}/>}
                    mapElement={<div style={{height: "100%"}}/>}
                    locations={this.props.distributionStations}
                    />
            </div>
        );
    }
}