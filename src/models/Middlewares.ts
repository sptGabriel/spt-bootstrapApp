import express from 'express';
export class Middlewares {
  private middlewares: any[];
  constructor(middlewares: any[]) {
    this.middlewares = middlewares;
  }
  getMiddlewares = () => {
    return this.middlewares;
  };
  getMiddleware = (middleware: any) => {
    return this.middlewares[middleware];
  };
  initializeMiddlewares = (server: express.Application) => {
    if (this.middlewares.length <= 0)
      throw new Error('Middlewares must be provided');
    for (let middleware of this.middlewares) {
      server.use(middleware);
    }
  };
}
