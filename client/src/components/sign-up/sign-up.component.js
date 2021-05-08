import React, { useState } from 'react';
import { connect } from 'react-redux';

import { signUpStart } from '../../redux/user/user.action';

import FormInput from '../Form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.scss';

const SignUP = ({ signUpStart }) => {
    const [userCredentials, setCredentials] = useState({
        displayName: '', email: '', password: '', confirmpassword: ''
    });

    const { displayName, email, password, confirmpassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmpassword) {
            alert("passwords don't match");
            return;
        }

        signUpStart({ displayName, email, password });
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <div className='sign-up'>
            <h2>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmpassword'
                    value={confirmpassword}
                    onChange={handleChange}
                    label='confirm password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUP);