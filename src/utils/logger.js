exports.logger = (type = "LOG", message) => {
  switch (type) {
    case "LOG":
      console.log(message);
      break;
    case "ERROR":
      console.error(message);
      break;
    case "WARNING":
      console.warn(message);
      break;
    case "INFO":
      console.info(message);
      break;
    default:
      console.log(message);
  }
};
