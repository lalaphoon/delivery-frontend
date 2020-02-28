import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Polyline } from "react-google-maps";
import { GOOGLE_MAP_URL } from "../constants";
import { MapDistriStatMarker} from "./MapDistriStatMarker";
import MapRoute from "./MapRoute"
import {connect} from "react-redux"

class MapFunc extends React.Component {


    render()
    {
        return (

            <GoogleMap
                defaultZoom={12}
                defaultCenter={{lat: 37.7749, lng: -122.4194}}>
                {
                    this.props.locations ?
                    this.props.locations.map((ds) => (
                        <MapDistriStatMarker
                            locationInfo = {ds}
                            key={ds.station_id}
                        />
                    )) : null
                }
                {

                    this.props.routes ?
                        this.props.routes.map((route, key) => (
                        <MapRoute
                            route = {route.route}
                            id={route.route_id}
                            key={route.route_id}
                        />
                    )) : null

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
                    locations={this.props.markers ? this.props.markers : null}
                    routes={this.props.routes ? this.props.routes : null}
                    />
            </div>
        );
    }
}