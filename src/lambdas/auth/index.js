const { Logger } = require("../../utils/logger");

const logger = new Logger("Auth");
exports.handler = async (event) => {
  logger.info("Event from Auth", event);
  logger.debug("Environment Variables: ", process.env);

  return {
    message: "Invoked Auth Lambda",
  };
};
