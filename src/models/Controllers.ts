import { BaseController } from '../interfaces/controler.interface';
import { container } from 'tsyringe';
export class Controller<T> {
  private controllers: any[];
  constructor(controllers: any[]) {
    this.controllers = controllers;
  }
  public getControllers = () => {
    return this.controllers;
  };
  public registerControllersInContainer = () => {
    for (let controller of this.controllers) {
      container.registerSingleton<T>('Controllers', controller);
    }
  };
}
