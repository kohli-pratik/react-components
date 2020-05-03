import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SideDrawer from '../../components/SideDrawer';
import Accordion from '../Accordion';
import chevronRight from '../../styles/images/chevron-right.svg';
import CategoryPanel from './components/CategoryPanel';

const BurgerMenu = ({
    open,
    menuData = [],
}) => {
    const [categoryPanelState, setCategoryPanelState] = useState([]);
    const toggleCategoryPanel = (id) => {
        const menuItem = id.split('-')[1];
        const category = id.split('-')[2];
        const currentState = categoryPanelState[menuItem] && categoryPanelState[menuItem][category];
        setCategoryPanelState({
            [menuItem]: {
                [category]: !currentState,
            },
        });
    };

    const generateChildren = () => {
        const childrenHTML = [];
        const accordionData = [];
        menuData.forEach((data, index) => {
            let dataToAdd = false;
            const { title } = data;
            const { link } = data;
            let content;
            if (!data.hasOptions && !data.hasCategories) {
                dataToAdd = true;
            } else if (data.hasOptions && !data.hasCategories) {
                dataToAdd = true;
                const optionsData = [];
                data.options.forEach((option, idx) => {
                    optionsData.push(<a key={idx} className={'burger-menu-data-option'}
                        href={option.link}>{option.name}</a>);
                });
                content = optionsData;
            } else if (data.hasCategories && !data.hasOptions) {
                dataToAdd = true;
                const categoriesData = [];
                data.categoriesData.forEach((categoryData, idx) => {
                    categoriesData.push(<CategoryPanel id={`category-${index}-${idx}`}
                        title={categoryData.title}
                        options={categoryData.options}
                        show={(categoryPanelState && categoryPanelState[index]
                            && categoryPanelState[index][idx]) || false}
                        goBack={toggleCategoryPanel} />);
                    categoriesData.push(<div key={idx} className={'burger-menu-data-category'}
                        id={`category-${index}-${idx}`}
                        onClick={(event) => toggleCategoryPanel(event.target.id)}>
                        <p className={'burger-menu-data-category-title'}>{categoryData.title}</p>
                        <div className='spacer'></div>
                        <img className={'burger-menu-data-category-icon'} src={chevronRight}></img>
                    </div>);
                });
                content = categoriesData;
            }

            if (dataToAdd) accordionData.push({ title, link, content });
        });
        childrenHTML.push(<>
            <Accordion id={'burger-menu-data'}
                data={accordionData}
                allowMultipleExpanded={false} />
        </>);
        return childrenHTML;
    };

    return (<SideDrawer open={open} id={'burger-menu'}>
        {generateChildren()}
    </SideDrawer>);
};

BurgerMenu.propTypes = {
    open: PropTypes.bool,
    menuData: PropTypes.array,
};

export default BurgerMenu;
