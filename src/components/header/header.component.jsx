import React from 'react';
import './header.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import CartIcon from '../cart-icon';
import CartDropdown from '../cart-dropdown';

export const Header = ({ currentUser, hidden, toggleCartHidden }) => {
  const logo = (
    <Link to='/' className='logo-container'>
      <Logo className='logo' />
    </Link>
  );

  const shop = (
    <Link to='/shop' className='option'>
      Shop
    </Link>
  );

  const constact = (
    <Link to='/contact' className='option'>
      Contact
    </Link>
  );

  const signin = (
    <Link to='/signin' className='option'>
      Sign In
    </Link>
  );

  const signout = (
    <div className='option' onClick={() => auth.signOut()}>
      Sign Out
    </div>
  );

  return (
    <div className='header'>
      {logo}
      <div className='options'>
        {shop}
        {constact}
        {currentUser ? signout : signin}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
  return { currentUser, hidden };
};

export default connect(mapStateToProps)(Header);
