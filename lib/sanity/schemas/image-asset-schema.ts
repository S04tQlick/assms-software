import {defineType, defineField} from 'sanity'

export default defineType({
    name: 'imageAsset',
    title: 'Image Asset (library)',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title'
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description'
        }),
        defineField({
            name: 'image',
            title: 'Image file',
            type: 'image',
            options: { hotspot: true }
        }),
        defineField({
            name: 'tags',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Optional tags for searching images'
        })
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image'
        }
    }
})
