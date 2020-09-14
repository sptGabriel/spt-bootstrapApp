import typeorm from 'typeorm';

export interface TypeormContract {
  getConfig(): typeorm.ConnectionOptions | undefined;
  runMigration(): Promise<void>;
  init(): Promise<void>;
}
