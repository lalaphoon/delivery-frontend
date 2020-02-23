import React from "react";
import '../styles/OrderRoute.css'
import {Descriptions, Badge, Form, Button, PageHeader} from 'antd';

class OrderRouteForm extends React.Component {


    render() {

        return (
            <div>
                <Descriptions title="Deliver Info" bordered column={1}>
                    <Descriptions.Item label="Deliver Type">Drone</Descriptions.Item>
                    <Descriptions.Item label="Available time">2018-04-24 18:00:00</Descriptions.Item>
                    <Descriptions.Item label="Usage Time">
                        2019-04-24 18:00:00
                    </Descriptions.Item>
                    <Descriptions.Item label="Status">
                        <Badge status="processing" text="Running" />
                    </Descriptions.Item>
                    <Descriptions.Item label="Distance">534.1m</Descriptions.Item>
                    <Descriptions.Item label="Price">$80.00</Descriptions.Item>
                </Descriptions>
                <Button type="primary" htmlType="submit" className="next-button" onClick={this.props.handleNextBottonCallback}>
                    Next
                </Button>
            </div>
        )
    }
}
export const OrderRoute = Form.create({name: 'orderroute'})(OrderRouteForm);


