'use strict';

/**
 * Menuphotobanner.js controller
 *
 * @description: A set of functions called "actions" for managing `Menuphotobanner`.
 */

module.exports = {

  /**
   * Retrieve menuphotobanner records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.menuphotobanner.search(ctx.query);
    } else {
      return strapi.services.menuphotobanner.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a menuphotobanner record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.menuphotobanner.fetch(ctx.params);
  },

  /**
   * Count menuphotobanner records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.menuphotobanner.count(ctx.query, populate);
  },

  /**
   * Create a/an menuphotobanner record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.menuphotobanner.add(ctx.request.body);
  },

  /**
   * Update a/an menuphotobanner record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.menuphotobanner.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an menuphotobanner record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.menuphotobanner.remove(ctx.params);
  }
};
