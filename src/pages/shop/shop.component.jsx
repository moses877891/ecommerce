import React from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.action';

import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPagecontainer from '../../pages/collection/collection.component.container';


class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    }

    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPagecontainer} />
            </div>
        );
    }
};

const mapDispatchToprops = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToprops)(ShopPage);