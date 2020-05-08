import React from 'react';
import './collections-overview.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop';
import CollectionPreview from '../collection-preview';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...collection }) => (
      <CollectionPreview key={id} {...collection} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

const mapDispatchToProps = {
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionsOverview);
