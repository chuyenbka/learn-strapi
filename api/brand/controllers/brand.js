'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

	findByName: async ctx => {
		console.log('strapi ', strapi.api)
		ctx.send('Hello World 123456!');
	},

};
