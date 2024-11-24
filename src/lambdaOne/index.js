const { logger } = require("../utils/logger");
const axios = require("axios");

exports.handler = async (event) => {
  console.log("Event from Lambda One", event);
  logger("INFO", `${process.env.env} value is : ${process.env.var}`);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda One" }),
  };
};
