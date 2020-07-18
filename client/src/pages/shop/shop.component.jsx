import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop';
import Spinner from '../../components/spinner';

const CollectionPageContainer = lazy(() => import('../collection/index'));
const CollectionOverviewContainer = lazy(() =>
  import('../../components/collections-overview/index')
);

export class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Suspense fallback={<Spinner />}>
          <Route
            exact
            path={`${match.path}`}
            component={CollectionOverviewContainer}
          />
          <Route
            path={`${match.path}/:collection`}
            component={CollectionPageContainer}
          />
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchCollectionsStart,
};

export default connect(null, mapDispatchToProps)(ShopPage);
