const winston = require("winston");
const { combine, timestamp, label, printf } = winston.format;

const logformat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

/*keep ALL errors in the debug.log(non fatal + fatal) file
fatal errors in the error.log file, for easier inspection & debug
*/
const Logger = winston.createLogger({
  level: "info",
  format: combine(label({ label: "Express" }), timestamp(), logformat),
  defaultMeta: { service: "Express" },
  transports: [
    new winston.transports.File({ filename: "./log/error.log", level: "error" }),
    new winston.transports.File({ filename: "./log/debug.log" }),
  ],
});

module.exports = { Logger };
