import React from 'react';
import './checkout-item.scss';

import { connect } from 'react-redux';
import { removeItem, addItem, decreaseItem } from '../../redux/cart';

export const CheckoutItem = ({ item, addItem, removeItem, decreaseItem }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className="arrow" onClick={() => decreaseItem(item)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
      </span>
      <span className='price'>${price}</span>
      <div className='remove-button' onClick={() => removeItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  removeItem,
  addItem,
  decreaseItem
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
