'use strict';

/**
 * Hometopimage.js controller
 *
 * @description: A set of functions called "actions" for managing `Hometopimage`.
 */

module.exports = {

  /**
   * Retrieve hometopimage records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.hometopimage.search(ctx.query);
    } else {
      return strapi.services.hometopimage.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a hometopimage record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.hometopimage.fetch(ctx.params);
  },

  /**
   * Count hometopimage records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.hometopimage.count(ctx.query, populate);
  },

  /**
   * Create a/an hometopimage record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.hometopimage.add(ctx.request.body);
  },

  /**
   * Update a/an hometopimage record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.hometopimage.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an hometopimage record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.hometopimage.remove(ctx.params);
  }
};
