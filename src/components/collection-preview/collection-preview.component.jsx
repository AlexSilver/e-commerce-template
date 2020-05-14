import React from 'react';
import './collection-preview.scss';
import CollectionItem from '../collection-item';
import { Link, withRouter } from 'react-router-dom';

const CollectionPreview = ({ title, routeName, items, match }) => (
  <div className='collection-preview'>
    <Link to={`${match.path}/${routeName}`}>
      <h1 className='title'>{title}</h1>
    </Link>
    <div className='preview'>
      {items
        .filter((_, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
