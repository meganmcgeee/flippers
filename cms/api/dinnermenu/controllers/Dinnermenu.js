'use strict';

/**
 * Dinnermenu.js controller
 *
 * @description: A set of functions called "actions" for managing `Dinnermenu`.
 */

module.exports = {

  /**
   * Retrieve dinnermenu records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.dinnermenu.search(ctx.query);
    } else {
      return strapi.services.dinnermenu.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a dinnermenu record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.dinnermenu.fetch(ctx.params);
  },

  /**
   * Count dinnermenu records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.dinnermenu.count(ctx.query, populate);
  },

  /**
   * Create a/an dinnermenu record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.dinnermenu.add(ctx.request.body);
  },

  /**
   * Update a/an dinnermenu record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.dinnermenu.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an dinnermenu record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.dinnermenu.remove(ctx.params);
  }
};
