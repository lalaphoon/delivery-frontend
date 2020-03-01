import React from 'react';
import '../styles/Main3.css'
import {Layout, Menu, Breadcrumb, PageHeader, Button, Descriptions, Form} from 'antd';
import MapTest from "./MapTest"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"

class Main3Form extends React.Component {

    handleConfirmButtonClick = () => {
        console.log('clicked confirm button on main3');
        this.props.history.push('/confirmation');
    }

    render() {
        const { Content, Footer, Sider } = Layout;
        return (
            <Layout>
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Main1</Breadcrumb.Item>
                        <Breadcrumb.Item>Main2</Breadcrumb.Item>
                        <Breadcrumb.Item>Main3</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout style={{padding: '24px 0', background: '#fff'}}>
                        <Sider width={500} style={{background: '#fff'}}>
                            <Menu
                                style={{height: '100%'}}
                            >
                                <PageHeader
                                    ghost={false}
                                    onBack={() => window.history.back()}
                                    title="Main3"
                                >
                                    <Descriptions bordered column={1} size="middle">
                                        <Descriptions.Item label="From">{this.props.startingLoc}</Descriptions.Item>
                                        <Descriptions.Item label="To">{this.props.destination}</Descriptions.Item>
                                        <Descriptions.Item label="Weight">{this.props.weight}</Descriptions.Item>
                                        <Descriptions.Item label="Distance">{this.props.distance}</Descriptions.Item>
                                        <Descriptions.Item label="By">Robot</Descriptions.Item>
                                        <Descriptions.Item label="Time Required">{this.props.usageTime}</Descriptions.Item>
                                        <Descriptions.Item label="Tel.">415-234-5678</Descriptions.Item>
                                        <Descriptions.Item label="Price">$80.00</Descriptions.Item>
                                    </Descriptions>
                                    <Button type="primary" htmlType="submit" className="confirm-button" onClick={this.handleConfirmButtonClick}>
                                        Confirm
                                    </Button>
                                </PageHeader>
                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 500}}>
                            <MapTest/>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>Delivery - FLAGCamp</Footer>
            </Layout>
        );
    }
}

const Main3 = withRouter( Form.create({ name: 'main3' })(Main3Form));

export default connect (
    ({orderReducer, routeInfoReducer }) => ({
        startingLoc : orderReducer.startingLoc,
        destination: orderReducer.destination,
        weight: orderReducer.weight,
        distance: orderReducer.distance,
        price: orderReducer.price,
        usageTime: orderReducer.usageTime,
        route: routeInfoReducer.route
    }),

    (dispatch) => ({

    })
)(Main3);




