import React, {Component} from 'react';
import '../styles/Main1.css'
import {Breadcrumb, Button, Layout, Menu, PageHeader, Input} from "antd"
import {Map} from "./Map"
import SearchBar from './SearchBar'

/* global google */
export class Main1 extends Component {

    state = {
        markers: [],
        weight: null
    }

    Geocoder = new google.maps.Geocoder();

    handleSelectPlace = (place_id, label) => {
        this.Geocoder.geocode({placeId: place_id},results => {
            const marker = {
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng(),
                label: label
            };
            console.log(marker);
            console.log(this.state.markers);
            // this.setState({
            //     markers: [ ...this.state.markers, marker ]
            // })
            const tmpMarker = this.state.markers;
            for( var i = 0; i < tmpMarker.length; i++) {
                if ( tmpMarker[i].label === marker.label) {
                    tmpMarker.splice(i, 1);
                }
            }
            tmpMarker.push(marker);
            this.setState({markers: tmpMarker});
        });
    }


    handleWeight = (e) => {
        this.setState({Weight: e.target.value});
    }


    render() {

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
                                    title="Delivery Information"
                                >
                                    <div className="from-to-form">
                                        <SearchBar handleSelectPlace={this.handleSelectPlace} placeHolder="From"/>
                                        <SearchBar handleSelectPlace={this.handleSelectPlace} placeHolder="To"/>
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
                                            className="main1-confirm-button">
                                            Confirm
                                        </Button>
                                    </div>
                                </PageHeader>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 500 }}>
                            <Map markers={this.state.markers}/>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Delivery - FLAGCamp</Footer>
            </Layout>
        );
    }
}