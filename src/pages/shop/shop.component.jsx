import React from 'react';
import CollectionsOverview from '../../components/collections-overview';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection';

export const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collection`} component={CollectionPage} />
  </div>
);
