import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector'

import { ReactComponent as Logo } from '../../assets/crown.svg';
import {
    HeaderContainer, LogoContainer,
    OptionContainer, OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionContainer>
            <OptionLink to='/Shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/Shop'>
                CONTACT
            </OptionLink>
            {currentUser ? (
                <OptionLink as='div' onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionLink>
            ) : (
                <OptionLink to='/Signin'>
                    SIGN IN
                </OptionLink>
            )}
            <CartIcon />
        </OptionContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);