import { IController, BaseController } from '../interfaces/controler.interface';
import { Controller } from '../models/Controllers';

export class ControllerManagerFactory<T> {
  private controllers: any[];
  constructor() {
    this.controllers = [];
  }
  public setControllers(controllers: any[]) {
    if (!controllers) throw new Error('Controllers must be provided');
    for (let controller of controllers) {
      this.controllers.push(controller);
    }
  }
  public newControllerManager = () => {
    if (!this.controllers) throw new Error('Controllers must be provided');
    return new Controller<T>(this.controllers);
  };
}
