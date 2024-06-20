const { createServer } = require("https");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const { exec } = require("child_process");
const { Logger } = require("./shared/lib/utils/logger/Logger.js");

dotenv.config();

const isDev = process.env.NODE_ENV === "dev";
const DEV_HOST = process.env.DEV_HOST;

/** @type {import('next/dist/server/next').NextServerOptions} */
const serverConfig = {
  dev: isDev,
  conf: {
    isNextDevCommand: isDev,
    distDir: "./.next",
  },
};

const bootstrap = () => {
  const logger = new Logger(bootstrap.name);
  const app = next(serverConfig);
  const handle = app.getRequestHandler();

  const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, ".cert/localhost-key.pem")),
    cert: fs.readFileSync(path.join(__dirname, ".cert/localhost.pem")),
  };

  app.prepare().then(() => {
    createServer(httpsOptions, (req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(3000, (err) => {
      if (err) throw err;
      logger.log(`> Ready on ${DEV_HOST}:3000`);
    });
  });
};

/**
 * Запуск сервера nextjs
 * Принимает параметр запуска `mod`, запуск в дев моде или страт билда проекта
 * @param {string} mod - "dev" | "start"
 */
const server = (mod) => {
  const logger = new Logger(server.name);

  if (mod === "start") {
    logger.log("Starting app in production mode...");
    exec("npm run build", (err, stdout, warn) => {
      if (err) {
        return logger.error(err);
      }
      logger.log(stdout);
      if (warn) {
        logger.warn(warn);
      }
      bootstrap();
    });
  }

  if (mod === "dev") {
    logger.log("Starting app in dev mode...");
    bootstrap();
  } else {
    logger.error(
      "Required arguments was not provided. \n example:\n npm run cert dev   - запуск nextjs приложения в dev режиме с локальным https сертификатом \n npm run cert start - запуск билда приложения nextjs с локальным https сертификатом",
    );
  }
};

server(process.argv[2]);
