const { Logger } = require("../../utils/logger");
const logger = new Logger("Exception");

exports.handler = async (event) => {
  logger.info("Event from Exception", event);
  logger.debug("Environment Variables: ", process.env);

  return {
    message: "Invoked Exception Handler Lambda",
  };
};
