"use strict";

/**
 * muncipality controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::muncipality.muncipality",
  ({ strapi }) => ({
    async findByDistrict(ctx) {
      const { id } = ctx.params;
      const data = await strapi.query("api::muncipality.muncipality").findMany({
        where: {
          district: {
            id,
          },
        },
      });

      return data;
    },
  })
);
