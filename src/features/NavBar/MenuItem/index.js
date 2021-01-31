import React from 'react';
import PropTypes from 'prop-types';

const generateOptions = (options) => {
    const optionsHTML = [];
    options.forEach((option, i) => {
        optionsHTML.push(<a key={i} href={option.link}>
            {option.name}
        </a>);
    });
    return optionsHTML;
};

const generateCategories = (categoriesData) => {
    const categoriesHTML = [];
    categoriesData.forEach((category, idx) => {
        const options = [];
        category.options.forEach((option, i) => {
            options.push(<a key={i} href={option.link}>
                {option.name}
            </a>);
        });

        categoriesHTML.push(<div key={idx} className='sub-category'>
            <p className='sub-category-title'>{category.title}</p>
            <div className='sub-category-options'>
                {options}
            </div>
        </div>);
    });
    return categoriesHTML;
};

const MenuItem = ({
    id = '',
    title = '',
    link = '',
    hasOptions = false,
    options = [],
    hasCategories = false,
    categoriesData = [],
    dropdownRef,
    dropdownOpen = false,
    dropdownHeight = '0px',
    handleMouseEnter,
    handleMouseLeave,
}) => (<>
    {!hasOptions && !hasCategories && <li className='item' id={id}>
        <a className='item-link' href={link}>{title}</a>
    </li>}
    {(hasOptions || hasCategories) && <li className='item dropdown' id={id}
        onMouseEnter={() => handleMouseEnter(id)}
        onMouseLeave={() => handleMouseLeave(id)}>
        <p className={dropdownOpen ? 'item-title active' : 'item-title'}>{title}</p>
        {hasOptions && !hasCategories && <div className='dropdown-options hidden'
            style={{ maxHeight: `${dropdownHeight}` }} ref={dropdownRef}>
            {generateOptions(options)}
        </div>}
        {hasCategories && !hasOptions && <div className='dropdown-categories hidden'
            style={{ maxHeight: `${dropdownHeight}` }} ref={dropdownRef}>
            {generateCategories(categoriesData)}
        </div>}
    </li>}
</>);

MenuItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    hasOptions: PropTypes.bool,
    options: PropTypes.array,
    hasCategories: PropTypes.bool,
    categoriesData: PropTypes.array,
    dropdownRef: PropTypes.any,
    dropdownOpen: PropTypes.bool,
    dropdownHeight: PropTypes.string,
    handleMouseEnter: PropTypes.func,
    handleMouseLeave: PropTypes.func,
};

export default MenuItem;
