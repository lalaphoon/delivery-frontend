import React from 'react';
import '../styles/Main1.css'
import MapTest from "./MapTest"
import {Layout,
    Menu,
    Breadcrumb,
    PageHeader,
    Button,
    Descriptions,
    Input,
    InputNumber,
    Form} from 'antd';
import {OrderDetails} from "./OrderDetail"
import { withRouter } from 'react-router-dom';

class Main1StartingForm extends React.Component {
    state = {
        number: {
            value: 11,
        },
    };

    goToNextPage = () => {
        console.log('clicked');
        this.props.history.push('/main2');
    }


    render() {
        const { Content, Footer, Sider } = Layout;

        return (
        <Layout>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Main1</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Content style={{padding: '0 24px', minHeight: 500 }}>
                        <MapTest/>
                    </Content>
                    <Sider width={'45%'} style={{ background: '#fff' }}>
                        <OrderDetails cb={this.goToNextPage}/>
                    </Sider>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Delivery - FLATCamp</Footer>
        </Layout>
        );
    }
}
export const Main1 = withRouter( Form.create({ name: 'main1' })(Main1StartingForm));