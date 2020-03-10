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


    goToNextPage = () => {
        console.log('clicked next button on main1');
        this.props.history.push('/main2');
    }

    componentDidMount() {
        this.checkAvailability();
    }

    componentWillUnmount() {
        const allScripts = document.getElementsByTagName( 'script' );
        [].filter.call(
            allScripts,
            ( scpt ) => scpt.src.indexOf( 'key=AIzaSyCQd2_s804T25-Xtvm5PndruimLb6pEuY4' ) >= 0
        )[ 0 ].remove();

        window.google = {};
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
                        {/*<Map markers={this.state.distributionStations} />*/}
                         <Map markers={this.state.markers}/>
                    </Content>
                    {/*<Sider width={'45%'} style={{ background: '#fff' }}>*/}
                    {/*    <OrderDetails cb={this.goToNextPage}/>*/}
                    {/*</Sider>*/}
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
    ({distributionLocationReducer}) => ({
       locations: distributionLocationReducer.locations
    }),

    //action
    (dispatch) => ({
        set(items){
            dispatch({'type' : 'set', 'newDistributionLocation' : items})
        },
    })
)(Main1);