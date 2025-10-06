import {defineType, defineField} from 'sanity'

export default defineType({
    name: 'branch',
    title: 'Branch',
    type: 'document',
    fields: [
        defineField({ name: 'name', type: 'string', title: 'Branch name', validation: Rule => Rule.required() }),
        defineField({ name: 'institution', title: 'Institution', type: 'reference', to: [{ type: 'institution' }], validation: Rule => Rule.required() }),
        defineField({
            name: 'location',
            title: 'Geolocation',
            type: 'geopoint',
            description: 'Latitude/longitude. Use the Google Maps input plugin for friendly UI.'
        }),
        defineField({ name: 'address', title: 'Address', type: 'text' }),
        defineField({ name: 'phone', title: 'Phone', type: 'string' })
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'address'
        }
    }
})
