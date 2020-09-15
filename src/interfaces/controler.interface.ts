import { Router } from 'express';

export interface IController {
  getPath(): string;
  getRouter(): Router;
}

export abstract class BaseController {
  private path: string;
  private router: Router;
  constructor() {}
  private initializeRoutes() {}
  public getPath = (): string => {
    return this.path;
  };
  public getRouter = (): Router => {
    return this.router;
  };
}

class test extends BaseController {}
