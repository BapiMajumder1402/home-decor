export default {
    name: 'about',
    type: 'document',
    title: 'About Section',
    fields: [
        {
            name: 'smallHeading',
            type: 'string',
            title: 'Small Heading',
        },
        {
            name: 'boldHeading',
            type: 'string',
            title: 'Bold Heading',
        },
        {
            name: 'lightHeading',
            type: 'string',
            title: 'Light Heading',
        },
        {
            name: 'aboutDescription',
            type: 'string',
            title: 'About Description',
        },
        {
            name: 'aboutImage',
            type: 'image',
            title: 'About Image',
            options: {
                hotspot: true,
            },
        },
    ],
};
