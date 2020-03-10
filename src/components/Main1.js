import React , { Component }from 'react';
import '../styles/Main1.css'
import { Map } from "./Map"
import SearchBar from "./SearchBar"
import {
    Layout,
    Menu,
    Breadcrumb,
    PageHeader,
    Button,
    Descriptions,
    Input,
    InputNumber,
    Form, message
} from 'antd';
import OrderDetails from "./OrderDetail"
import { withRouter } from 'react-router-dom';
import {API_ROOT} from "../constants"
import {connect} from "react-redux";

/* global google */
class Main1StartingForm extends React.Component {
    state = {
        number: {
            value: 11,
        },
        weight: null,
        markers: [],
        distributionStations : [],
    };

    goToNextPage = () => {
        console.log('clicked next button on main1');
        this.props.history.push('/main2');
    }

    componentDidMount() {
        this.checkAvailability();
    }

    markerCallback = (m) => {
        this.setState({markers: m});
    }


    checkAvailability = () => {
        fetch(`${API_ROOT}/availability`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => {
             return response.json();
        }).then((data) => {
            console.log(data);
            this.setState({
                distributionStations: data ? data : [],
            });
            this.props.set(data);
        }).catch((error) => {

        });
    }


    render() {
        //TODO: remove this bloc, This is a piece of code for testing reducer
        // if (this.props.locations) {
        //     this.props.locations.map((value) => {
        //         console.log(value.station_name);
        //     })
        // }

        const { Content, Footer, Sider } = Layout;
        return (
        <Layout>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Main1</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Content style={{padding: '0 24px', minHeight: 500 }}>
                         <Map markers={this.state.distributionStations} userMarkers={this.state.markers}/>
                    </Content>
                    <Sider width={500} style={{ background: '#fff' }}>
                        <OrderDetails collectMarker={this.markerCallback} cb={this.goToNextPage}/>
                    </Sider>

                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Delivery - FLATCamp</Footer>
        </Layout>
        );
    }
}
const Main1 = withRouter( Form.create({ name: 'main1' })(Main1StartingForm));

export default connect(
    //state
    ({distributionLocationReducer, orderReducer}) => ({
       locations: distributionLocationReducer.locations,
        markers: orderReducer.markers,
    }),

    //action
    (dispatch) => ({
        set(items){
            dispatch({'type' : 'set', 'newDistributionLocation' : items})
        },
    })
)(Main1);