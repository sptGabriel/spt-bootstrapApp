import express from 'express';
import { Controller } from 'models/Controllers';
import { Middlewares } from 'models/Middlewares';
import { TypeOrm } from 'models/Typeorm-Model';
export type bootstrapDiContainer = {
  orm: TypeOrm;
  middlewares: Middlewares;
  controllerManager: Controller;
};
export interface bootstrapApp {
  getServer(): express.Application;
  listen(): Promise<void>;
}
