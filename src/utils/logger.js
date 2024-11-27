const pino = require("pino");

/**
 * A reusable logger class for AWS Lambda.
 */
export class Logger {
  /**
   * Creates an instance of LambdaLogger.
   * @param {string} serviceName - Name of the service or Lambda function.
   */
  constructor(serviceName) {
    this.serviceName = serviceName;

    // Determine log level from environment or fallback to 'info'.
    const logLevel = process.env.LOG_LEVEL || "info";

    // Check if JSON logging is enabled via environment.
    const isJson = process.env.LOG_FORMAT === "json";

    // Define the logger configuration.
    this.logger = pino({
      level: logLevel,
      base: { service: this.serviceName }, // Adds service name to every log entry
      timestamp: pino.stdTimeFunctions.isoTime, // ISO timestamp
      formatters: {
        level: (label, number) => ({
          level: number, // Keep numeric level
          levelName: label, // Add string level name
        }),
      },
      transport: !isJson
        ? {
            target: "pino-pretty", // Pretty print for development
            options: {
              colorize: true,
              translateTime: true,
              ignore: "pid,hostname", // Remove unnecessary fields
            },
          }
        : undefined,
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
