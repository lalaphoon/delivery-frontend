import React from 'react';
import '../styles/Main2.css'
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
import {OrderRoute} from "./OrderRoute"
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

        return (
            <Layout>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Main2</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Content style={{padding: '0 24px', minHeight: 500 }}>
                            <MapTest/>
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