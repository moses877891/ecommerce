import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUP from '../../components/sign-up/sign-up.component';

//import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
    // <SignInAndSignUpContainer>
    //     <SignIn />
    //     <SignUP />
    // </SignInAndSignUpContainer>
    <div className="row">
        <div className="col-12 col-md-6 mt-3">
            <SignIn />
        </div>
        <div className="col-12 col-md-6 mt-3">
            <SignUP />
        </div>

    </div>
)

export default SignInAndSignUpPage;