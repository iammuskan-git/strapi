"use strict";

/**
 * muncipality router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::muncipality.muncipality", {
  config: {
    findByDistrict: {
      auth: false,
    },
    find: {
      auth: false,
    },
    findOne: {
      auth: false,
    },
  },
});
