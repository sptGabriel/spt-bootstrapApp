import { Controller } from 'models/Controllers';
import { Middlewares } from 'models/Middlewares';
import { TypeOrm } from 'models/Typeorm-Model';
import express from 'express';
import { Connection, getConnection } from 'typeorm';
import { container } from 'tsyringe';
export class BootstrapApplication {
  public application: express.Application;
  private orm: TypeOrm;
  private middlewares: Middlewares;
  private controllerManager: Controller;
  // private controllers: IController[];
  constructor(
    orm: TypeOrm,
    middlewares: Middlewares,
    controllerManager: Controller
  ) {
    this.application = express();
    this.orm = orm;
    this.middlewares = middlewares;
    this.controllerManager = controllerManager;
  }
  public getServer = (): express.Application => {
    return this.application ? this.application : (this.application = express());
  };
  public listen = async () => {
    await this.orm.startTypeorm();
    const connection = getConnection(this.orm.getConnectionName());
    container.register(Connection, { useValue: connection });
    this.middlewares.initializeMiddlewares();
    this.application.listen(process.env.SERVER_PORT, () => {
      console.log(`⚡️ App listening on the port ${process.env.SERVER_PORT}`);
    });
  };
}
