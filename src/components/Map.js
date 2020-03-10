import React from "react";
import { GoogleMap, withGoogleMap } from "react-google-maps";
import { GOOGLE_MAP_URL, CENTER } from "../constants";
import { MarkerTest } from "./MarkerTest";

class MapFunc extends React.Component {



    render()
    {
        return (
            <GoogleMap
                defaultZoom={12}
                defaultCenter={CENTER}>
                {
                    this.props.locations ?
                        this.props.locations.map((marker) => (
                            <MarkerTest
                                markerInfo = {marker}
                                key={marker.label}
                            />
                        )) : null
                }
            </GoogleMap>
        );
    }
}

const WrappedMap = withGoogleMap(MapFunc);

export class Map extends React.Component{


    render() {

        return (
            <div style={{height: "100%"}}>
                <WrappedMap
                    googleMapURL={`${GOOGLE_MAP_URL}`}
                    loadingElement={<div style={{height: "100%"}}/>}
                    containerElement={<div style={{height: "100%"}}/>}
                    mapElement={<div style={{height: "100%"}}/>}
                    locations={this.props.markers ? this.props.markers : null}
                    routes={this.props.routes ? this.props.routes : null}
                />
            </div>
        );
    }
}