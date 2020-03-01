import React from "react";
import '../styles/OrderDetail.css'
import {
    Layout,
    Menu,
    Breadcrumb,
    PageHeader,
    Button,
    Descriptions,
    Input,
    InputNumber,
    Form
} from 'antd';
import {connect} from "react-redux"

function validatePrimeNumber(number) {
    if (number < 40 && number > 1) {
        return {
            validateStatus: 'success',
            errorMsg: null,
        };
    }
    return {
        validateStatus: 'error',
        errorMsg: 'The range must be 1 to 40!',
    };
}

class OrderDetailsForm extends React.Component {
    state = {
        number: {
            value: 11,
        },
    };

    handleNumberChange = value => {
        this.setState({
            number: {
                ...validatePrimeNumber(value),
                value,
            },
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            this.props.setBothLocation({startingLoc: values.starting_location, destination: values.destination_location, weight: this.state.number.value});
        });
        this.props.cb();
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { number } = this.state;
        const totalWeight_tips =
            'Total weight range is from 1 to 40';

        return (
            <div>
                <div className="orderdetails-header">
                    Where do you want to deliver you objects?
                </div>

                <Form className="orderdetails-form" onSubmit={this.handleSubmit}>
                    <Form.Item
                        label="Total weight"
                        validateStatus={number.validateStatus}
                        help={number.errorMsg || totalWeight_tips}
                    >
                        <InputNumber min={8} max={12} value={number.value} onChange={this.handleNumberChange} />
                    </Form.Item>
                    <Form.Item label="Starting Location">
                        {getFieldDecorator('starting_location', {
                            rules: [{ required: true, message: 'Please input your starting location!', whitespace: true }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="Destination Location">
                        {getFieldDecorator('destination_location', {
                            rules: [{ required: true, message: 'Please input your ending location!', whitespace: true }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item>
                        <Button className="orderdetails-button" htmlType="submit">Next</Button>
                    </Form.Item>
                </Form>

            </div>
        );
    }
}
const OrderDetails = Form.create({name: 'orderdetails'})(OrderDetailsForm);

export default connect(
    //state
    ({orderReducer}) => ({
        startingLoc: orderReducer.startingLoc,
        destination: orderReducer.destination
    }),

    //action
    (dispatch) => ({
        setStartingLoc(loc) {
            dispatch({'type' : 'setStartLoc', 'startingLoc' : loc})
        },
        setDestination(loc) {
            dispatch({'type' : 'setDestination', 'destination' : loc})
        },
        setBothLocation(locs) {
            dispatch({'type' : 'setBoth', 'bothLocs' : locs})
        },
    })
)(OrderDetails);