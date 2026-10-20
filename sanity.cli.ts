import { defineCliConfig } from 'sanity/cli';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || 'g4lv0ipl';
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production';

export default defineCliConfig({
  api: {
    projectId: projectId,
    dataset: dataset,
  },
});
