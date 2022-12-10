"use strict";

/**
 * oracle service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::oracle.oracle");
