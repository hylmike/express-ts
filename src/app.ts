import { InversifyExpressServer } from "inversify-express-utils";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { container } from "./di_container";
import { DbService } from "./db/dbService";
import { logErrorMiddleware, returnError } from "./util/errorHandler";
import { LoggerService } from "./util/loggerService";

export class App {
  async setup() {
    const _db = container.get(DbService);
    _db.connect();

    const logger = container.get(LoggerService);
    logger.setup();

    const server = new InversifyExpressServer(container);

    server.setConfig((app) => {
      app.use(express.json());
      app.use(express.urlencoded({ extended: false }));
      app.use(cors());
      app.use(cookieParser());
    });

    server.setErrorConfig((app) => {
      app.use(logErrorMiddleware);
      app.use(returnError);
    });

    const app = server.build();

    app.get('/', (req, res)=>{
      res.send("Hi, Express server is runing now");
    })

    app.listen(process.env.PORT, () => {
      console.log(
        "The backend server is running at localhost port: " + process.env.PORT
      );
    });
  }
}
