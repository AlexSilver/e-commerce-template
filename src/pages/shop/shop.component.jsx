import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionPage from '../collection';
import CollectionsOverview from '../../components/collections-overview';
import {
  fetchCollectionsStartAsync,
  selectIsFetching,
  selectErrorMessage,
} from '../../redux/shop';
import withSpinner from '../../hoc/with-spinner';
import { createStructuredSelector } from 'reselect';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

export class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsStartAsync();
  }

  render() {
    const { match, loading } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collection`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loading: selectIsFetching,
  error: selectErrorMessage
});

const mapDispatchToProps = {
  fetchCollectionsStartAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
