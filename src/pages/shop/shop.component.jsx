import React from 'react';
import CollectionPreview from '../../components/collection-preview';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop';

const ShopPage = ({ collections }) => (
  <div className='shop-page'>
    {collections.map(({ id, ...collection }) => (
      <CollectionPreview key={id} {...collection} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);