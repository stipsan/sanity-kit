import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {pages} from '@tinloof/sanity-studio'

export default defineConfig({
  name: 'default',
  title: 'Vite studio',
  projectId: 'ptjmyfc9',
  dataset: 'production',
  plugins: [
    structureTool(),
    pages({
      previewUrl: {
        draftMode: {
          enable: 'http://localhost:9999/api/draft',
        },
      },
      creatablePages: ['page'],
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
