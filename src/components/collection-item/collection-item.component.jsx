import React from 'react';
import './collection-item.scss';
import CustomButton from '../custom-button';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart';

export const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <div className='name'>{name}</div>
        <div className='price'>${price}</div>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = {
  addItem,
};

export default connect(null, mapDispatchToProps)(CollectionItem);
