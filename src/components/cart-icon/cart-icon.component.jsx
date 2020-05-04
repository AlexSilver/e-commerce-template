import React from 'react';
import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden, selectCartItemsCount } from '../../redux/cart';
import { createStructuredSelector} from 'reselect';

export const CartIcon = ({ itemCount, toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount | 0}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = {
  toggleCartHidden,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
