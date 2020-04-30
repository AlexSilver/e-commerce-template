import React from 'react';
import './collection-item.scss';
import CustomButton from '../custom-button';

export const CollectionItem = ({ name, imageUrl, price }) => (
  <div className='collection-item'>
    <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className='collection-footer'>
      <div className='name'>{name}</div>
      <div className='price'>${price}</div>
    </div>
    <CustomButton inverted={true}>Add to cart</CustomButton>
  </div>
);
