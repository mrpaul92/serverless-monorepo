const axios = require("axios");
const { Logger } = require("../utils/logger");

const logger = new Logger("LambdaOne");
exports.handler = async (event) => {
  logger.info("Event from Lambda One", event);
  logger.debug("Environment Variables: ", process.env);

  logger.debug("This is a debug message"); // Should appear if level >= debug
  logger.info("This is an info message");
  logger.warn("This is a warning message");
  logger.error("This is an error message");

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda One" }),
  };
};
