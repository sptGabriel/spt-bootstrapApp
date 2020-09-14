import { ConnectionOptions } from 'typeorm';

export interface TypeormContract {
  getConfig(): ConnectionOptions | undefined;
  runMigration(): Promise<void>;
  init(): Promise<void>;
}
