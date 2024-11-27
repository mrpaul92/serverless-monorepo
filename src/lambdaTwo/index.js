const { Logger } = require("../utils/logger");
const logger = new Logger("LambdaTwo");

exports.handler = async (event) => {
  logger.info("Event from Lambda Two", event);
  logger.debug("Environment Variables: ", process.env);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda Two" }),
  };
};
