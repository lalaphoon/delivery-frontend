import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Polyline } from "react-google-maps";
import { GOOGLE_MAP_URL, CENTER } from "../constants";
import { MapDistriStatMarker } from "./MapDistriStatMarker";
import { MapUserMarker } from "./MapUserMarker";
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
                    this.props.locations.map((ds, index) => (
                        <MapDistriStatMarker
                            locationInfo = {ds}
                            //key={ds.station_id}
                            key={index}
                        />
                    )) : null
                }
                {
                    this.props.userSelection ?
                        this.props.userSelection.map((marker) => (
                            <MapUserMarker
                                markerInfo = {marker}
                                key={marker.label}
                            />

                        )) : null
                }
                {
                    //route : array of {route_id, route}

                    this.props.routes ?
                        this.props.routes.map((route, index) => (
                        <MapRoute
                            route = {route.route}
                            id={route.route_id}
                            index = {index}
                            key={index}
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
                    userSelection={this.props.userMarkers ? this.props.userMarkers : null}
                    locations={this.props.markers ? this.props.markers : null}
                    routes={this.props.routes ? this.props.routes : null}
                    />
            </div>
        );
    }
}