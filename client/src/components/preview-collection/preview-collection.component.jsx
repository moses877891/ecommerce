import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../colllection-item/collection-item.component';
import './preview-collection.styles.scss';

const CollectionPreview = ({ title, items, history, linkUrl, match }) => (
    <div className='collection-preview'>
        <h1 className='title mt-5'>{title.toUpperCase()}</h1>
        <p className="mb-2 sub-title text-danger"
            onClick={() => history.push(`shop/${title.toLowerCase()}`)}>
            view more</p>
        <div className='preview'>
            {
                items
                    .filter((items, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} className='item' />
                    ))
            }
        </div>
    </div>
);

export default withRouter(CollectionPreview);