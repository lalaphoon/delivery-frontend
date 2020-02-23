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

    render() {
        const { getFieldDecorator } = this.props.form;
        const { number } = this.state;
        const totalWeight_tips =
            'Total weight range is from 1 to 40';

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
            marginRight: 200
        };

        return (
            <div>
                <div className="orderdetails-header">
                    Where do you want to deliver you objects?
                </div>

                <Form className="orderdetails-form" onSubmit={this.handleSubmit}>
                    <Form.Item
                        {...formItemLayout}
                        label="total weight "
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
                </Form>
                <Button className="main1-button">Next</Button>
            </div>
        );
    }
}
export const OrderDetails = Form.create({name: 'orderdetails'})(OrderDetailsForm);