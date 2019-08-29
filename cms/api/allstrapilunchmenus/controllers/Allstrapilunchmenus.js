'use strict';

/**
 * Allstrapilunchmenus.js controller
 *
 * @description: A set of functions called "actions" for managing `Allstrapilunchmenus`.
 */

module.exports = {

  /**
   * Retrieve allstrapilunchmenus records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.allstrapilunchmenus.search(ctx.query);
    } else {
      return strapi.services.allstrapilunchmenus.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a allstrapilunchmenus record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.allstrapilunchmenus.fetch(ctx.params);
  },

  /**
   * Count allstrapilunchmenus records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.allstrapilunchmenus.count(ctx.query, populate);
  },

  /**
   * Create a/an allstrapilunchmenus record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.allstrapilunchmenus.add(ctx.request.body);
  },

  /**
   * Update a/an allstrapilunchmenus record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.allstrapilunchmenus.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an allstrapilunchmenus record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.allstrapilunchmenus.remove(ctx.params);
  }
};
