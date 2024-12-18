export default {
    name: 'accessories',
    type: 'document',
    title: 'Home Accessories',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Product Name',
        },
        {
            name: 'description',
            type: 'string',
            title: 'Product Description',
        },
        {
            name: 'price',
            type: 'string',
            title: 'Price Range',
        },
        {
            name: 'stock',
            type: 'string',
            title: 'Stock Available',
        },
        {
            name: 'productImages',
            type: 'array',
            title: 'Product Images',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
            ],
        },
    ],
};
