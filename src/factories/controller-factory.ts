import { IController } from '../interfaces/controler.interface';
import { Controller } from '../models/Controllers';
import { isClass } from '../utils/isClass';

export class ControllerManagerFactory {
  private controllers: IController[] = [];
  constructor() {}
  public setControllers(controllers: IController[]) {
    if (!controllers || !isClass(controllers))
      throw new Error('Controllers must be provided');
    for (let controller of controllers) {
      this.controllers.push(controller);
    }
  }
  public newControllerManager = () => {
    if (!this.controllers) throw new Error('Controllers must be provided');
    return new Controller(this.controllers);
  };
}
