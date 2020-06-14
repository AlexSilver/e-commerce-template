import { connect } from 'react-redux';
import { compose } from 'redux';
import withSpinner from '../../hoc/with-spinner';
import CollectionPage from './collection.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state) || selectIsCollectionFetching(state),
});

export const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);