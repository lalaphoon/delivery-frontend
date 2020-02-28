import React from 'react';
import '../styles/Main2.css'
import { Map } from "./Map"
import {Layout,
    Menu,
    Breadcrumb,
    PageHeader,
    Button,
    Descriptions,
    Input,
    InputNumber,
    Form} from 'antd';
import OrderRoute from "./OrderRoute"
import { withRouter } from 'react-router-dom';

class Main2Form extends React.Component {
    state = {
        number: {
            value: 11,
        },
    };

    goToNextPage = () => {
        console.log('clicked next button on main2');
        this.props.history.push('/main3');
    }


    render() {
        const { Content, Footer, Sider } = Layout;
        //TODO: removed this coordinates
        const pathCoordinates = [
            { lat: 37.7571, lng: -122.4866 },
            { lat: 37.777630, lng: -122.496440 },
            { lat: 37.777340, lng: -122.410350 },
            { lat: 37.792, lng: -122.4052}
        ];
        const pathCoordinates2 = [
            { lat: 37.7571, lng: -122.4866 },
            { lat: 37.792, lng: -122.4052}
        ];

        return (
            <Layout>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Main2</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Content style={{padding: '0 24px', minHeight: 500 }}>
                            <Map routes={[pathCoordinates, pathCoordinates2]}/>
                        </Content>
                        <Sider width={'45%'} style={{ background: '#fff' }}>
                            <OrderRoute handleNextBottonCallback={this.goToNextPage}/>
                        </Sider>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Delivery - FLATCamp</Footer>
            </Layout>
        );
    }
}
export const Main2 = withRouter( Form.create({ name: 'main2' })(Main2Form));