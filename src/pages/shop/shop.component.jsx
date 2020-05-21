import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionPageContainer from '../collection';
import CollectionOverviewContainer from '../../components/collections-overview';
import { fetchCollectionsStartAsync } from '../../redux/shop';

export class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collection`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchCollectionsStartAsync,
};

export default connect(null, mapDispatchToProps)(ShopPage);