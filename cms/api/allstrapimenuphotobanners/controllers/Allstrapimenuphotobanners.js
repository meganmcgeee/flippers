'use strict';

/**
 * Allstrapimenuphotobanners.js controller
 *
 * @description: A set of functions called "actions" for managing `Allstrapimenuphotobanners`.
 */

module.exports = {

  /**
   * Retrieve allstrapimenuphotobanners records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.allstrapimenuphotobanners.search(ctx.query);
    } else {
      return strapi.services.allstrapimenuphotobanners.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a allstrapimenuphotobanners record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.allstrapimenuphotobanners.fetch(ctx.params);
  },

  /**
   * Count allstrapimenuphotobanners records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.allstrapimenuphotobanners.count(ctx.query, populate);
  },

  /**
   * Create a/an allstrapimenuphotobanners record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.allstrapimenuphotobanners.add(ctx.request.body);
  },

  /**
   * Update a/an allstrapimenuphotobanners record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.allstrapimenuphotobanners.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an allstrapimenuphotobanners record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.allstrapimenuphotobanners.remove(ctx.params);
  }
};
