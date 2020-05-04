import React from 'react';
import './cart-dropdown.scss';
import CartItem from '../cart-item';
import CustomButton from '../custom-button';
import { selectCartItems } from '../../redux/cart';
import { createStructuredSelector} from 'reselect';
import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>Go to checkout</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems });

export default connect(mapStateToProps)(CartDropdown);
