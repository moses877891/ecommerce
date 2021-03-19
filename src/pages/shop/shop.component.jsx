import React from 'react';
import SHOP_DATA from './shop_data.jsx';
import CollectionPreview from '../../components/preview-collection/preview-collection.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collection: SHOP_DATA
        }
    }

    render() {
        const { collection } = this.state;
        return (
            <div className='shop-page'>
                {
                    collection.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;