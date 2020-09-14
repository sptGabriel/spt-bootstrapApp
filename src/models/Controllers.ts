import { IController } from 'interfaces/controler.interface';
import { isClass } from 'utils/isClass';
import { container } from 'tsyringe';
export class Controller {
  private controllers: IController[];
  constructor(controllers: IController[]) {
    this.controllers = controllers;
  }
  public registerControllersInContainer = () => {
    for (let controller of this.controllers) {
      if (isClass(controller))
        container.registerSingleton<IController>('Controllers', controller);
    }
  };
}
