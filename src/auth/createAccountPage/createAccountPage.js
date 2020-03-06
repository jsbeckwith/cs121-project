import React from 'react';
import axios from 'axios';
import { TextField } from '@material-ui/core';
import { context } from '../../context.js';
import ContextConsumer from '../../context.js';
import AuthHeader from '../authHeader.js';
import Tooltip from '@material-ui/core/Tooltip';
import '../auth.scss';

class CreateAccountPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            inputDisplayName: "",
            inputUsername: "",
            inputPassword: "",
            inputPassword2: "",
            errors: {},
          };
    }



    updateDisplayName = (event) => {
        this.setState({inputDisplayName : event.target.value});
	}

    updateUsername = (event) => {
		this.setState({inputUsername : event.target.value});
    }
    
    updatePassword = (event) => {
		this.setState({inputPassword : event.target.value});
    }
    
    updatePassword2 = (event) => {
        this.setState({inputPassword2 : event.target.value});
    }

    onSubmit = () => {
        const inputUserInfo = {
            "displayname": this.state.inputDisplayName,
            "username": this.state.inputUsername,
            "password": this.state.inputPassword,
            "password2": this.state.inputPassword2
        };
        axios.post("http://localhost:4000/users/register", inputUserInfo)
            .then(res => {
                this.props.setUser(res);
                window.alert(`Account for ${res.username} successfully created. Welcome to your journey!`);
                window.location = "/homepage";
            })
            .catch( (error) => {
                this.setState({errors: error});
                console.log(error);
            });
    };

    // TODO make this print error messages from register.js
    renderErrors = () => {
        let stringified = JSON.stringify(this.state.errors);
        if (stringified != '{}') {
            return (
                <div className={'auth-errors'}>
                    {stringified}
                </div>
            )
        } else {
            return null;
        }
        
    }

    render () {
        let errors = this.renderErrors();

        return (
            <ContextConsumer>
				{(value) => (
                    <div className="auth-page create-account-page">
                        <AuthHeader/>
                        <br/>
                        <div className="auth-content create-account-content">
                            <form className="form">
                                <TextField label="Name" variant="outlined" margin="normal" onChange={this.updateDisplayName}/>
                                <br/>
                                <TextField label="Username" variant="outlined" margin="normal" onChange={this.updateUsername}/>
                                <br/>
                                <TextField label="Password" variant="outlined" margin="normal" onChange={this.updatePassword}/>
                                <br/>
                                <TextField label="Confirm Password" variant="outlined" margin="normal" onChange={this.updatePassword2}/>
                            </form>
                            <br/>
                            <Tooltip title="create account">
                                <button className="create-account-button auth-button journey-button" onClick={this.onSubmit}> 
                                    create account
                                </button>
                            </Tooltip>
                            <div className="switch-auth-text">
                                Already have an account?&nbsp;
                                <a href="/">Log in</a>
                                .
                            </div>
                            {errors}
                        </div>
                    </div>
                )}
            </ContextConsumer>
        );
    }
}

export default CreateAccountPage;