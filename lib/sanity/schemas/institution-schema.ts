import {defineType, defineField} from 'sanity'

export default defineType({
    name: 'institution',
    title: 'Institution',
    type: 'document',
    fields: [
        defineField({ name: 'name', type: 'string', title: 'Name', validation: Rule => Rule.required() }),
        defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'name', maxLength: 96 } }),
        defineField({
            name: 'logo',
            title: 'Logo (use library or upload)',
            type: 'image',
            description: 'Prefer using the Image Asset library for reuse',
            options: { hotspot: true }
        }),
        defineField({
            name: 'logoRef',
            title: 'Logo (reference to image library)',
            type: 'reference',
            to: [{ type: 'imageAsset' }],
            description: 'Reference an image from the centralized image library (preferred for reuse).'
        }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'website', title: 'Website', type: 'url' }),
        defineField({ name: 'contactEmail', title: 'Contact email', type: 'string' })
    ],
    preview: {
        select: {
            title: 'name',
            media: 'logo'
        }
    }
})
