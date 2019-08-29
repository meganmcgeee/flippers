'use strict';

/**
 * Allstrapihomedescriptionimages.js controller
 *
 * @description: A set of functions called "actions" for managing `Allstrapihomedescriptionimages`.
 */

module.exports = {

  /**
   * Retrieve allstrapihomedescriptionimages records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.allstrapihomedescriptionimages.search(ctx.query);
    } else {
      return strapi.services.allstrapihomedescriptionimages.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a allstrapihomedescriptionimages record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.allstrapihomedescriptionimages.fetch(ctx.params);
  },

  /**
   * Count allstrapihomedescriptionimages records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.allstrapihomedescriptionimages.count(ctx.query, populate);
  },

  /**
   * Create a/an allstrapihomedescriptionimages record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.allstrapihomedescriptionimages.add(ctx.request.body);
  },

  /**
   * Update a/an allstrapihomedescriptionimages record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.allstrapihomedescriptionimages.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an allstrapihomedescriptionimages record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.allstrapihomedescriptionimages.remove(ctx.params);
  }
};
