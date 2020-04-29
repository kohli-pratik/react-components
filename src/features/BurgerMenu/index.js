import React from 'react';
import PropTypes from 'prop-types';
import SideDrawer from '../../components/SideDrawer';
import Accordion from '../Accordion';

const BurgerMenu = ({
    open,
    menuData = [],
}) => {
    const generateChildren = () => {
        const childrenHTML = [];
        const accordionData = [];
        menuData.forEach((data) => {
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
                    optionsData.push(<a key={idx} className={'burger-menu-sub-option'}
                        href={option.link}>{option.name}</a>);
                });
                content = optionsData;
            } else if (data.hasCategories && !data.hasOptions) {
                dataToAdd = true;
                const categoriesData = [];
                data.categoriesData.forEach((categoryData, idx) => {
                    // Side Panel to add for category options
                    categoriesData.push(<>
                        <a key={idx} className={'burger-menu-sub-option'}>{categoryData.title}</a>
                    </>);
                });
                content = categoriesData;
            }

            if (dataToAdd) accordionData.push({ title, link, content });
        });
        childrenHTML.push(<>
            <Accordion id={'burger-menu'}
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
