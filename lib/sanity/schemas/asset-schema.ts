import {defineType, defineField} from 'sanity'

export default defineType({
    name: 'asset',
    title: 'Asset',
    type: 'document',
    fields: [
        defineField({ name: 'name', title: 'Asset name', type: 'string', validation: Rule => Rule.required() }),
        defineField({ name: 'sku', title: 'SKU', type: 'string' }),
        defineField({ name: 'institution', title: 'Institution', type: 'reference', to: [{ type: 'institution' }], validation: Rule => Rule.required() }),
        defineField({ name: 'branch', title: 'Branch', type: 'reference', to: [{ type: 'branch' }] }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                { type: 'image', options: { hotspot: true } },
                { type: 'reference', to: [{ type: 'imageAsset' }], title: 'From image library (reference)' }
            ],
            description: 'Upload images or reference existing images from the image library. Prefer referencing library for reuse.'
        }),
        defineField({
            name: 'location',
            type: 'geopoint',
            title: 'Asset Location',
            description: 'Optional precise location (lat/lng) of the asset'
        }),
        defineField({ name: 'notes', title: 'Notes', type: 'text' })
    ],
    preview: {
        select: {
            title: 'name',
            media: 'images.0'
        }
    }
})
