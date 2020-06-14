import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

export const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_ASeMXxkL5wMDBKr1pd1rY56F00a18A3zNB';

  const onToken = (token) => {
    axios
      .post('payment', {
        amount: priceForStripe,
        token: token,
      })
      .then((response) => {
        alert('Payment successful');
      })
      .catch((error) => {
        console.log('Payment error: ' + JSON.parse(error));
        alert('There was an issue with your payment. Please sure you use the provided credit card.');
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
