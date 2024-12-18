export default {
    name: 'premium',
    type: 'document',
    title: 'Premium Wallpapers',
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
            name: 'stock',
            type: 'string',
            title: 'Stock Available',
        },
        {
            name: 'price',
            type: 'string',
            title: 'Price Range',
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
