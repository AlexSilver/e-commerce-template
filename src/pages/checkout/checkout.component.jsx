import React from 'react';
import './checkout.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotalPrice } from '../../redux/cart';
import CheckoutItem from '../../components/checkout-item'

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

  const items = (
    cartItems.map(item => (
      <CheckoutItem key={item.id} item={item} />
    ))
  )

  const totalPrice = (
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
  )

  return (
    <div className='checkout-page'>
      {header}
      {items}
      {totalPrice}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);
