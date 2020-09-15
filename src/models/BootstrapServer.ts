import { Controller } from '../models/Controllers';
import { Middlewares } from '../models/Middlewares';
import { TypeOrm } from '../models/Typeorm-Model';
import express from 'express';
import { getConnection, Connection } from 'typeorm';
import { container } from 'tsyringe';
import {
  bootstrapDiContainer,
  bootstrapApp,
} from 'interfaces/bootstrap-interface';

export class BootstrapApplication implements bootstrapApp {
  private application: express.Application;
  private orm: TypeOrm;
  private middlewares: Middlewares;
  private controllerManager: Controller<any>;
  // private controllers: IController[];
  constructor(dependencyContainer: bootstrapDiContainer) {
    this.application = express();
    this.orm = dependencyContainer.orm;
    this.middlewares = dependencyContainer.middlewares;
    this.controllerManager = dependencyContainer.controllerManager;
  }
  private initiliazeExpressRoutes = () => {
    for (let controller of this.controllerManager.getControllers()) {
      this.application.use('/', controller.getRouter());
    }
  };
  public getServer = (): express.Application => {
    return this.application ? this.application : (this.application = express());
  };
  public listen = async () => {
    await this.orm.startTypeorm();
    const connection = getConnection(this.orm.getConnectionName());
    container.register(Connection, { useValue: connection });
    this.middlewares.initializeMiddlewares(this.application);
    this.initiliazeExpressRoutes();
    this.application.listen(3001, () => {
      console.log(`⚡️ App listening on the port ${3001}`);
    });
  };
}
