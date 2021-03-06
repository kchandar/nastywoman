// Sign up
import React from 'react';
import Quiz from './Quiz';
import 'materialize-css';
import {hashHistory} from 'react-router';

var SignUp = React.createClass({
    handleSignUpClick() {
       hashHistory.push("app");
    },

    render() {
        return(
            <section className="container">
                <Quiz />
                <h3>Account Information</h3>
                <form onSubmit={this.props.submit} className="col s12 authenticate" id="sign-up">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="input-field col s12">
                            <input type="text" id="displayName" className="validate" />
                            <label htmlFor="displayName">Display Name</label>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={this.handleSignUpClick} >Submit!</button>
                </form>
            </section>
        )
    }
});

export default SignUp;
