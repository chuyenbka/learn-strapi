module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '386c49d146d325cde5c8febd96d8d01f'),
    },
    host: '127.0.0.1', // only used along with `strapi develop --watch-admin` command
    port: 3000, // only used along with `strapi develop --watch-admin` command
  },
});
