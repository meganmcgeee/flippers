'use strict';

/**
 * Abouttext.js controller
 *
 * @description: A set of functions called "actions" for managing `Abouttext`.
 */

module.exports = {

  /**
   * Retrieve abouttext records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.abouttext.search(ctx.query);
    } else {
      return strapi.services.abouttext.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a abouttext record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.abouttext.fetch(ctx.params);
  },

  /**
   * Count abouttext records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.abouttext.count(ctx.query, populate);
  },

  /**
   * Create a/an abouttext record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.abouttext.add(ctx.request.body);
  },

  /**
   * Update a/an abouttext record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.abouttext.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an abouttext record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.abouttext.remove(ctx.params);
  }
};
