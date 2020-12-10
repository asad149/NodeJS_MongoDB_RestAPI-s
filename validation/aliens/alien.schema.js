const joi = require("@hapi/joi");

const schema = {
  alien: joi.object({
    name: joi.string().max(10).required(),
    tech: joi.string().max(10).required(),
    sub: joi.string().valid("true", "false").required(),
  }),
};
module.exports = schema;