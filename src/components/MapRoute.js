import React from 'react';
import {
    Polyline,
    InfoWindow
} from "react-google-maps";
import "../styles/MapDistriStatMarker.css"
import {connect} from "react-redux"

class MapRoute extends React.Component {

    //generate randomized color
    getRandomColor() {

        if (this.props.route_id === this.props.id) {
            return '#000000'
        }
        // var letters = '0123456789ABCDEF';
        // var color = '#';
        // for (var i = 0; i < 6; i++) {
        //     color += letters[Math.floor(Math.random() * 16)];
        // }
        //return color;
        if (this.props.index === 0) {
            return  '#00ff00'
        } else if (this.props.index === 1) {
            return '#fc03f4'
        } else if (this.props.index === 2) {
            return '#00ffff'
        }
        return '#ffff00'
    }

    handleClickEvent() {
        this.props.setRouteInfo({route_id : this.props.id, route: this.props.route})
    }

    render() {
       // const { station_name, robot, station_id, lon, lat, drone } = this.props.locationInfo;
        return (
            <Polyline
                path={this.props.route}
                geodesic={true}
                options={{
                    strokeColor: this.getRandomColor(),
                    strokeOpacity: 0.75,
                    strokeWeight: 6,
                    icons: [
                        {
                            // icon: lineSymbol,
                            offset: "0",
                            repeat: "20px"
                        }
                    ]
                }}
                onClick={()=>this.handleClickEvent()}
            >
            </Polyline>
        );
    }
}

export default connect(
    //state
    ({routeInfoReducer}) => ({
        route_id: routeInfoReducer.route_id
    }),

    //action
    (dispatch) => ({
        select(items){
            dispatch({'type' : 'select', 'selected' : items})
        },
        setRoute(route) {
            dispatch({
                    'type' : 'setRoute', 'selectedRoute' : route
            })
        },
        setRouteInfo(routeInfo) {
            dispatch({
                'type' : 'setRouteInfo', 'routeInfo' : routeInfo
            })
        }
    })
)(MapRoute);