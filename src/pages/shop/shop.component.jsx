import React from 'react';

import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../pages/collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../components/firebase/firebase.utils'

import withSpinner from '../../components/with-spinner/with-spinner.component';

import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.action';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    };

    unSubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection(`collection`);

        collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionMap);
            this.setState({ loading: false });
        });
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) =>
                    <CollectionsOverviewWithSpinner isLoading={loading}{...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) =>
                    <CollectionPageWithSpinner isLoading={loading}{...props} />} />
            </div>
        );
    }
};

const mapDispatchToprops = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToprops)(ShopPage);