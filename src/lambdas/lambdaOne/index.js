const axios = require("axios");
const { Logger } = require("../../utils/logger");

const logger = new Logger("LambdaOne");
exports.handler = async (event) => {
  logger.info("Event from Lambda One", event);
  logger.debug("Environment Variables: ", process.env);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda One" }),
  };
};
