import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUP from '../../components/sign-up/sign-up.component';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUP />
    </SignInAndSignUpContainer>
)

export default SignInAndSignUpPage;