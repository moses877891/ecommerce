import React from 'react';
import './sign-in-and-sign-up.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUP from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUP />
    </div>
)

export default SignInAndSignUpPage;