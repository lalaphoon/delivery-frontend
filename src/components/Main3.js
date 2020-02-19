import React from 'react';
import '../styles/Main3.css'
import { Layout, Menu, Breadcrumb, PageHeader, Button, Descriptions } from 'antd';
import MapTest from "./MapTest"

export function Main3() {

    const { Content, Footer, Sider } = Layout;

    return (
        <Layout>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Main1</Breadcrumb.Item>
                    <Breadcrumb.Item>Main2</Breadcrumb.Item>
                    <Breadcrumb.Item>Main3</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Sider width={500} style={{ background: '#fff' }}>
                        <Menu
                            style={{ height: '100%' }}
                        >
                            <PageHeader
                                ghost={false}
                                onBack={() => window.history.back()}
                                title="Main3"
                            >
                                <Descriptions bordered column={1} size="middle">
                                    <Descriptions.Item label="From">601 36th Ave</Descriptions.Item>
                                    <Descriptions.Item label="To">1130 Howard St</Descriptions.Item>
                                    <Descriptions.Item label="Weight">10 lb.</Descriptions.Item>
                                    <Descriptions.Item label="Distance">6.6 miles</Descriptions.Item>
                                    <Descriptions.Item label="By">Robot</Descriptions.Item>
                                    <Descriptions.Item label="Time Required">19 min</Descriptions.Item>
                                    <Descriptions.Item label="Tel.">415-234-5678</Descriptions.Item>
                                    <Descriptions.Item label="Price">$80.00</Descriptions.Item>
                                </Descriptions>
                                <Button type="primary" htmlType="submit" className="confirm-button">
                                    Confirm
                                </Button>
                            </PageHeader>
                        </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 500 }}>
                        <MapTest/>
                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Delivery - FLAGCamp</Footer>
        </Layout>
		
		
    );
}




