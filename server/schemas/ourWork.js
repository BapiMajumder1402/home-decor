export default {
    name: 'work',
    type: 'document',
    title: 'Our Work',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Customer Name',
        },
        {
            name: 'review',
            type: 'string',
            title: 'Customer Review',
        },
        {
            name: 'workImage',
            type: 'image',
            title: 'Work Image',
            options: {
                hotspot: true, 
            },
        }
        
    ],
};
