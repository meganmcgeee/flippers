'use strict';

/**
 * Lunchmenu.js controller
 *
 * @description: A set of functions called "actions" for managing `Lunchmenu`.
 */

module.exports = {

  /**
   * Retrieve lunchmenu records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.lunchmenu.search(ctx.query);
    } else {
      return strapi.services.lunchmenu.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a lunchmenu record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.lunchmenu.fetch(ctx.params);
  },

  /**
   * Count lunchmenu records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.lunchmenu.count(ctx.query, populate);
  },

  /**
   * Create a/an lunchmenu record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.lunchmenu.add(ctx.request.body);
  },

  /**
   * Update a/an lunchmenu record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.lunchmenu.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an lunchmenu record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.lunchmenu.remove(ctx.params);
  }
};
