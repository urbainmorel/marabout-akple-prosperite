import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemas';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || 'g4lv0ipl';
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'marabout-akple-prosperite-studio',
  title: 'Sanctuaire Vodun Akple - Cérémonies de Prospérité',
  projectId: projectId,
  dataset: dataset,
  basePath: '/studio',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
