import { TypeOrm } from '../models/Typeorm-Model';
import { ConnectionOptions } from 'typeorm';

export class TypeOrmFactory {
  private config: ConnectionOptions;
  constructor() {}
  public setConfig = (data: ConnectionOptions) => {
    if (!data) throw new Error('Connection options must be provided');
    this.config = data;
  };
  public newOrmConnection = () => {
    if (!this.config) throw new Error('Connection options must be provided');
    return new TypeOrm(this.config);
  };
}
