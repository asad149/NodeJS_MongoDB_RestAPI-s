const { alien } = require("./alien.schema");

module.exports = {
  addAlienValidation: async (req, res, next) => {
    const value = await alien.validate(req.body);
    if (value.error) {
      res.json({
        success: 0,
        message: value.error.details[0].message,
      });
    } else {
      next();
    }
  },
};
