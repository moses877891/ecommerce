import React from 'react';
import CollectionItem from '../colllection-item/collection-item.component'
import './preview-collection.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
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
)

export default CollectionPreview;