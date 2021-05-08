import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51IcAqtSBgSTy5RL9Rgg7H1lkGhNdIJRlsGYo6Uid0sexakw5AQK13fkOaxDbaPgYCnqp1iasD77eTYxuZDGvlfKJ00eeV9jk7A';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Successful');
        }).catch(error => {
            console.log('payment error: ', JSON.parse(error));
            alert('There was an issuse with your payment. Please sure you use the provided credit card');
        })
    }

    return (
        <StripeCheckout
            label='pay now'
            name='CRWN clothing ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`your total is ${price}`}
            currency="INR"
            amount={priceForStripe}
            panelLabel='pay now'
            token={onToken}
            stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton;