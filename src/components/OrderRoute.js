import React from "react";
import '../styles/OrderRoute.css'
import {Descriptions, Badge, Form, Button, PageHeader} from 'antd';
import {connect} from "react-redux"

class OrderRouteForm extends React.Component {

    render() {

        return (
            <div>
                <Descriptions title="Deliver Info" bordered column={1}>
                    <Descriptions.Item label="Deliver Type">{this.props.routeInfo && this.props.routeInfo.deliver_type }</Descriptions.Item>
                    <Descriptions.Item label="Available time">{this.props.routeInfo && this.props.routeInfo.available_time }</Descriptions.Item>
                    <Descriptions.Item label="Usage Time">
                        {this.props.routeInfo && this.props.routeInfo.usage_time}
                    </Descriptions.Item>
                    <Descriptions.Item label="Status">
                        <Badge status="processing" text="Running" />
                    </Descriptions.Item>
                    <Descriptions.Item label="starting location">{this.props.startingLoc}</Descriptions.Item>
                    <Descriptions.Item label="ending location">{this.props.destination}</Descriptions.Item>
                    <Descriptions.Item label="Distance">{this.props.routeInfo && this.props.routeInfo.distance}</Descriptions.Item>
                    <Descriptions.Item label="Price">{this.props.routeInfo && this.props.routeInfo.price}</Descriptions.Item>
                </Descriptions>
                <Button type="primary" htmlType="submit" className="next-button" onClick={this.props.handleNextBottonCallback}>
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
        destination: orderReducer.destination
    }),

    //action
    (dispatch) => ({
    })
)(OrderRoute);


