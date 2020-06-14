import React from 'react';
import './checkout.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotalPrice } from '../../redux/cart';
import CheckoutItem from '../../components/checkout-item';
import StripeButton from '../../components/stripe-button';

const CheckoutPage = ({ cartItems, total }) => {
  const headers = ['product', 'description', 'quantity', 'price', 'remove'];
  const header = (
    <div className='checkout-header'>
      {headers.map((h) => (
        <div key={h} className='header-block'>
          <span>{h}</span>
        </div>
      ))}
    </div>
  );

  const items = cartItems.map((item) => (
    <CheckoutItem key={item.id} item={item} />
  ));

  const cardWarning = (
    <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: any - CVV: any
    </div>
  );

  const totalPrice = (
    <div className='total'>
      <span>TOTAL: ${total}</span>
    </div>
  );

  return (
    <div className='checkout-page'>
      {header}
      {items}
      {totalPrice}
      {cardWarning}
      <StripeButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
