const { Logger } = require("../../utils/logger");

const logger = new Logger("Auth");
exports.handler = async (event) => {
  logger.info("Event from Auth", event);
  return {
    message: "Invoked Auth Lambda",
    data: {
      isAuthenticatd: true,
    },
  };
};
