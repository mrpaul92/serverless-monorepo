const { createLogger, format, transports } = require("winston");
const { combine, timestamp, json, printf } = format;

export class Logger {
  constructor(serviceName) {
    this.serviceName = serviceName;

    // Determine log level from environment or fallback to 'info'.
    const logLevel = process.env.LOG_LEVEL || "info";

    // Check if JSON logging is enabled via environment.
    const isJson = process.env.LOG_FORMAT === "json";

    // Define the log format.
    const logFormat = isJson
      ? combine(
          timestamp(),
          json() // Use JSON format for structured logging.
        )
      : combine(
          timestamp(),
          printf(({ level, message, timestamp, service, meta }) => {
            let log = `${timestamp} [${level}] [${service}] ${message}`;
            if (meta && Object.keys(meta).length) {
              log += ` | Meta: ${JSON.stringify(meta)}`;
            }
            return log;
          })
        );

    // Initialize the logger.
    this.logger = createLogger({
      level: logLevel,
      format: logFormat,
      defaultMeta: { service: this.serviceName },
      transports: [
        new transports.Console(), // Logs to CloudWatch
      ],
    });
  }

  /**
   * Logs an informational message.
   * @param {string} message - The log message.
   * @param {Object} [meta] - Additional metadata to log.
   */
  info(message, meta = {}) {
    this.logger.info({ message, meta });
  }

  /**
   * Logs a debug message.
   * @param {string} message - The log message.
   * @param {Object} [meta] - Additional metadata to log.
   */
  debug(message, meta = {}) {
    this.logger.debug({ message, meta });
  }

  /**
   * Logs a warning message.
   * @param {string} message - The log message.
   * @param {Object} [meta] - Additional metadata to log.
   */
  warn(message, meta = {}) {
    this.logger.warn({ message, meta });
  }

  /**
   * Logs an error message.
   * @param {string} message - The log message.
   * @param {Object} [meta] - Additional metadata to log.
   */
  error(message, meta = {}) {
    this.logger.error({ message, meta });
  }
}
