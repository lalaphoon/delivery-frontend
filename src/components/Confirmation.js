import React from 'react';
import '../styles/Confirmation.css'
import {Progress, Form, Button} from 'antd';
import { withRouter } from  "react-router-dom"

class ConfirmationForm extends React.Component {

    goBackToHome = () =>  {
        this.props.history.push('/user_status');
    }


    render() {
        return (
            <div>
                <Progress type="circle" percent={100} format={() => 'Done'} />
                <Button onClick={this.goBackToHome}>Back to Home </Button>
            </div>
        );
    }
}

export const Confirmation = withRouter(Form.create({name: "confirmation"})(ConfirmationForm));