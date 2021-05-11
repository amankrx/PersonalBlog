export default {
    name: 'richText',
    type: 'array',
    of: [
        {
            type: 'block',

        },
        {
            type: 'image',
            options: {hotspot: true},
        },
        {
            type: 'code',
            title: 'Code Input',
        },
    ],

}