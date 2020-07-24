const strapi = require('strapi');
strapi({ dir: process.cwd(), autoReload: true, watchAdmin: true, noBuild: true }).start();