import React from 'react';
import PropTypes from 'prop-types';
import chevronLeft from '../../../../styles/images/chevron-left.svg';

const CategoryPanel = ({
    id,
    title,
    options,
    show,
    goBack,
}) => (<div className={(show) ? 'selected-category' : 'selected-category hidden'}
    id={id}>
    <header className='selected-category-header'>
        <img src={chevronLeft} className='selected-category-header-icon'
            onClick={() => goBack(id)}></img>
        <p className='selected-category-header-title'>{title}</p>
    </header>
    <main className='selected-category-options'>
        {options.map((option, idx) => <a key={idx} href={option.link}>{option.name}</a>)}
    </main>
</div>);

CategoryPanel.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    options: PropTypes.array,
    show: PropTypes.bool,
    goBack: PropTypes.func,
};

export default CategoryPanel;
