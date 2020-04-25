import React from 'react';
import './collection-preview.scss';
import CollectionItem from '../collection-item';

export const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title}</h1>
    <div className='preview'>
      {items
        .filter((_, idx) => idx < 4)
        .map(({id, ...item}) => (
          <CollectionItem key={id} {...item} />
        ))}
    </div>
  </div>
);
