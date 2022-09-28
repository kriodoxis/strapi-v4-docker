'use strict';

/**
 * affiliate controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::affiliate.affiliate', ({strapi}) => ({
    findNear: async (ctx, next) => {
      const {latitude, longitude, distance} = ctx.request.query
      console.log(longitude && latitude && distance)
      ctx.body = "ok"
    }
  }));