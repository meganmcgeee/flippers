'use strict';

/**
 * Homedescription.js controller
 *
 * @description: A set of functions called "actions" for managing `Homedescription`.
 */

module.exports = {

  /**
   * Retrieve homedescription records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.homedescription.search(ctx.query);
    } else {
      return strapi.services.homedescription.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a homedescription record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.homedescription.fetch(ctx.params);
  },

  /**
   * Count homedescription records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.homedescription.count(ctx.query, populate);
  },

  /**
   * Create a/an homedescription record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.homedescription.add(ctx.request.body);
  },

  /**
   * Update a/an homedescription record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.homedescription.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an homedescription record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.homedescription.remove(ctx.params);
  }
};
