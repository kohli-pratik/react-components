const Constants = {
    actions: {},
    testData: {
        genders: [{
            name: 'gender',
            value: 'male',
            label: 'Male',
        }, {
            name: 'gender',
            value: 'female',
            label: 'Female',
        },
        {
            name: 'gender',
            value: 'other',
            label: 'Other',
        }],
        countries: [null, 'United Kingdom', 'USA'],
        accordion: [{
            title: 'Test accordion 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nullam eget felis eget nunc. Tortor id aliquet lectus proin nibh nisl. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer.',
        },
        {
            title: 'Test accordion 2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nullam eget felis eget nunc. Tortor id aliquet lectus proin nibh nisl. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nullam eget felis eget nunc. Tortor id aliquet lectus proin nibh nisl. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer.',
        },
        {
            title: 'Test accordion 3',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nullam eget felis eget nunc. Tortor id aliquet lectus proin nibh nisl. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer.',
        }],
        menuData: [{
            title: 'Menu Item 1',
            hasCategories: false,
            categoriesData: null,
            hasOptions: false,
            options: null,
            link: '/',
        },
        {
            title: 'Menu Item 2',
            hasCategories: false,
            categoriesData: null,
            hasOptions: true,
            options: [{
                name: 'option 1',
                link: '/',
            },
            {
                name: 'option 2',
                link: '/',
            },
            {
                name: 'option 3',
                link: '/',
            }],
            link: null,
        },
        {
            title: 'Menu Item 3',
            hasCategories: true,
            categoriesData: [{
                title: 'Category 1',
                options: [{
                    name: 'option 1',
                    link: '/',
                },
                {
                    name: 'option 2',
                    link: '/',
                }],
            },
            {
                title: 'Category 2',
                options: [{
                    name: 'option 1',
                    link: '/',
                },
                {
                    name: 'option 2',
                    link: '/',
                }],
            }],
            hasOptions: false,
            options: null,
            link: null,
        }],
    },
    strings: {
        footerText: {
            subText1: 'React Components by Pratik H Kohli',
            subText2: 'Copyright © 2020',
        },
    },
};

export default Constants;
