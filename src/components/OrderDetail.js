import React from "react";
import '../styles/OrderDetail.css'
import {
    Layout,
    Menu,
    Breadcrumb,
    PageHeader,
    Button,
    Descriptions,
    Input,
    InputNumber,
    Form
} from 'antd';
import {connect} from "react-redux"
import SearchBar from "./SearchBar"

/* global google */
class OrderDetailsForm extends React.Component {
    state = {
        weight: null,
        markers: [],
    };

    Geocoder = new google.maps.Geocoder();

    handleSubmit = e => {
        e.preventDefault();
        this.props.cb();
    }

    handleWeight = (e) => {
        // this.setState({Weight: e.target.value});
        this.props.setWeight(e.target.value);
    }

    handleSelectPlace = (place_id, label) => {
        this.Geocoder.geocode({placeId: place_id},results => {
            const marker = {
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng(),
                label: label
            };
            console.log(marker);
            console.log(this.props.markers);
            // this.setState({
            //     markers: [ ...this.state.markers, marker ]
            // })
            let tmpMarker;
            if (this.props.markers) {
                tmpMarker = this.props.markers;
                for (var i = 0; i < tmpMarker.length; i++) {
                    if (tmpMarker[i].label === marker.label) {
                        tmpMarker.splice(i, 1);
                    }
                }
                tmpMarker.push(marker);
                this.handleSearchValueChanged(results[0].formatted_address, tmpMarker , label);
            } else {
                tmpMarker = [];
                tmpMarker.push(marker);
                this.handleSearchValueChanged(results[0].formatted_address, tmpMarker , label);
            }

            this.props.collectMarker(tmpMarker);
        });
    }

    handleSearchValueChanged = (v, markers ,label) => {
        if (label === 'From') {
            console.log("from " + v);
            this.props.setStartingLoc({startingLoc: v, markers: markers});
        } else {
            console.log("to " + v);
            this.props.setDestination({destination: v, markers: markers});
        }

    }

    render() {

        return (
            <div>
                <div className="orderdetails-header">
                    Where do you want to deliver you objects?
                </div>
                <Menu
                    style={{ height: '100%' }}
                >
                    <PageHeader
                        ghost={false}
                        onBack={() => window.history.back()}
                        title="Delivery Information"
                    >
                        <div className="from-to-form">
                            <SearchBar valueCallBack={this.handleSearchValueChangedFrom} handleSelectPlace={this.handleSelectPlace} placeHolder="From"/>
                            <SearchBar valueCallBack={this.handleSearchValueChangedTo} handleSelectPlace={this.handleSelectPlace} placeHolder="To"/>
                            <Input
                                size="large"
                                placeholder="Weight"
                                addonAfter="lbs"
                                type="number"
                                min="0"
                                onChange={this.handleWeight}
                                className="from-to-input"
                            />
                            <Button
                                size="large"
                                type="primary"
                                htmlType="submit"
                                className="main1-confirm-button"
                                onClick={this.handleSubmit}>
                                Confirm
                            </Button>
                        </div>
                    </PageHeader>
                </Menu>

            </div>
        );
    }
}
const OrderDetails = Form.create({name: 'orderdetails'})(OrderDetailsForm);

export default connect(
    //state
    ({orderReducer}) => ({
        startingLoc: orderReducer.startingLoc,
        destination: orderReducer.destination,
        markers: orderReducer.markers,
    }),

    //action
    (dispatch) => ({
        setStartingLoc(loc) {
            dispatch({'type' : 'setStartLoc', 'startingLoc' : loc})
        },
        setDestination(loc) {
            dispatch({'type' : 'setDestination', 'destination' : loc})
        },
        setMarkers(markers) {
            dispatch({'type' : 'setMarkers', 'markers' : markers})
        },
        setWeight(weight) {
            dispatch({'type' : 'setWeight', 'weight': weight})
        },
        setBothLocation(locs) {
            dispatch({'type' : 'setBoth', 'bothLocs' : locs})
        },
    })
)(OrderDetails);