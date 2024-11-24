const { logger } = require("../utils/logger");

exports.handler = async (event) => {
  console.log("Event from Lambda Two", event);
  logger("INFO", `${process.env.env} value is : ${process.env.var}`);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda Two" }),
  };
};
