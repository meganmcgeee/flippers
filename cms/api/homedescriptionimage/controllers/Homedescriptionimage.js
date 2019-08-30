'use strict';

/**
 * Homedescriptionimage.js controller
 *
 * @description: A set of functions called "actions" for managing `Homedescriptionimage`.
 */

module.exports = {

  /**
   * Retrieve homedescriptionimage records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.homedescriptionimage.search(ctx.query);
    } else {
      return strapi.services.homedescriptionimage.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a homedescriptionimage record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.homedescriptionimage.fetch(ctx.params);
  },

  /**
   * Count homedescriptionimage records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.homedescriptionimage.count(ctx.query, populate);
  },

  /**
   * Create a/an homedescriptionimage record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.homedescriptionimage.add(ctx.request.body);
  },

  /**
   * Update a/an homedescriptionimage record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.homedescriptionimage.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an homedescriptionimage record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.homedescriptionimage.remove(ctx.params);
  }
};
