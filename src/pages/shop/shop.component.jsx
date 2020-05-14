import React from 'react';
import CollectionsOverview from '../../components/collections-overview';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop';

export class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        this.props.updateCollections(collectionsMap);
      }
    );
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collection`} component={CollectionPage} />
      </div>
    );
  }
}


const mapDispatchToProps = {
  updateCollections
}

export default connect(null, mapDispatchToProps)(ShopPage);
