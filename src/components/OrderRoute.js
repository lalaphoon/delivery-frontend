import React from "react";
import '../styles/OrderRoute.css'
import {Descriptions, Badge, Form, Button, PageHeader} from 'antd';
import {connect} from "react-redux"

class OrderRouteForm extends React.Component {

    goToNextPage = () => {
        if (this.props.routeInfo) {
            this.props.setDistance(this.props.routeInfo.distance);
            this.props.setPrice(this.props.routeInfo.price);
            this.props.setUsageTime(this.props.routeInfo.usage_time);
            this.props.setDeliverType(this.props.routeInfo.deliver_type);
            this.props.setOrderID(this.props.orderID);
        }

        this.props.handleNextBottonCallback();
    }

    render() {

        return (
            <div>
                <Descriptions title="Deliver Info" bordered column={1}>
                    <Descriptions.Item label="Deliver Type">{this.props.routeInfo && this.props.routeInfo.deliver_type }</Descriptions.Item>
                    <Descriptions.Item label="Available time">{this.props.routeInfo && this.props.routeInfo.available_time }</Descriptions.Item>
                    <Descriptions.Item label="Usage Time">
                        {this.props.routeInfo && this.props.routeInfo.usage_time}
                    </Descriptions.Item>
                    <Descriptions.Item label="total weight">
                        {this.props.weight}
                    </Descriptions.Item>
                    <Descriptions.Item label="starting location">{this.props.startingLoc}</Descriptions.Item>
                    <Descriptions.Item label="ending location">{this.props.destination}</Descriptions.Item>
                    <Descriptions.Item label="Distance">{this.props.routeInfo && this.props.routeInfo.distance}</Descriptions.Item>
                    <Descriptions.Item label="Price">{this.props.routeInfo && this.props.routeInfo.price}</Descriptions.Item>
                </Descriptions>
                <Button type="primary" htmlType="submit" className="next-button" onClick={this.goToNextPage}>
                    Next
                </Button>
            </div>
        )
    }
}
const OrderRoute = Form.create({name: 'orderroute'})(OrderRouteForm);

export default connect(
    //state
    ({orderReducer}) => ({
        startingLoc: orderReducer.startingLoc,
        destination: orderReducer.destination,
        weight: orderReducer.weight
    }),

    //action
    (dispatch) => ({
        setDistance(loc) {
            dispatch({'type' : 'setDistance', 'distance' : loc})
        },
        setPrice(loc) {
            dispatch({'type' : 'setPrice', 'price' : loc})
        },
        setUsageTime(locs) {
            dispatch({'type' : 'setUsageTime', 'usageTime' : locs})
        },
        setDeliverType(type) {
            dispatch({'type' : 'setDeliverType', 'deliverType' : type})
        },
        setOrderID(id) {
            dispatch({'type' : 'setOrderID', 'orderID' : id})
        }
    })
)(OrderRoute);


