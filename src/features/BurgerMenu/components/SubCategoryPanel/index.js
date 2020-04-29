import React from 'react';
import chevronLeft from '../../../../styles/images/chevron-left.svg';

const SubCategoryPanel = () => (
    <>
        <div className='selected-sub-category'>
            <img src={chevronLeft} className='selected-sub-category-icon'></img>
            <p className='selected-sub-category-name'>TEST</p>
        </div>
        <div className='sub-category-options'></div>
    </>
);

export default SubCategoryPanel;
