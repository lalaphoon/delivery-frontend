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
import {API_ROOT} from "../constants"
import {connect} from "react-redux"

class Main2Form extends React.Component {
    state = {
        number: {
            value: 11,
        },
        routes: [],
        order_id: "",
        markers:[]
    };

    goToNextPage = () => {
        console.log('clicked next button on main2');
        this.props.history.push('/main3');
    }

    componentDidMount() {
        this.checkAllocation();
    }

    getLocations = (v) => {
        const markers = this.props.userMarkers;
        for (var i = 0; i < markers.length; i++) {
            if (v === markers[i].label) {
                return {lat: markers[i].lat, lng: markers[i].lng};
            }

        }
        return "";

    }

    checkAllocation = () => {
        fetch(`${API_ROOT}/allocate`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: '1111',
                total_weight: this.props.total_weight,
                location_from: this.getLocations("From"),
                location_to: this.getLocations("To")
            })

        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
            this.setState({
                routes: data.routes ? data.routes : [],
                order_id : data.order_id ? data.order_id : ""
            });
            // this.props.set(data);

        }).catch((error) => {

        });
    }

    getRoutes = () => {
        let routelist = [];
        if (this.state.routes != null) {
            routelist =  this.state.routes.map( (value) => {
                return (
                    {
                        route_id :  value.route_id,
                        route : value.route
                    }
                )
            })
        }
        return routelist;
    }

    getRouteInfoById = () => {
        let routelist = [];
        if (!this.props.selected_route_id === ""){
            return this.state.routes[0];
        }
        if (this.state.routes != null) {
            if(this.props.selected_route_id !== "") {
                routelist = this.state.routes.filter((value) => {
                    return value.route_id === this.props.selected_route_id
                })
            }
        }

        return routelist[0];
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
                            <Map userMarkers={this.props.userMarkers} routes={this.getRoutes()}/>
                        </Content>
                        <Sider width={'45%'} style={{ background: '#fff' }}>
                            <OrderRoute orderID={this.state.order_id} routeInfo={this.getRouteInfoById()}  handleNextBottonCallback={this.goToNextPage}/>
                        </Sider>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Delivery - FLATCamp</Footer>
            </Layout>
        );
    }
}

const Main2 = withRouter( Form.create({ name: 'main2' })(Main2Form));

export default connect(
    //state
    ({routeInfoReducer, orderReducer}) => ({
        userMarkers: orderReducer.markers,
        total_weight: orderReducer.weight,
        selected_route_id: routeInfoReducer.route_id
    }),

    //action
    (dispatch) => ({

    })
)(Main2);