import { Connection, ConnectionOptions, createConnection } from 'typeorm';

export class TypeOrm {
  private config: ConnectionOptions;
  private connection: Connection;
  constructor(config: ConnectionOptions) {
    this.config = config;
  }
  public getConnectionName = () => {
    return this.connection ? this.connection.name : undefined;
  };
  public getConfig = () => {
    return this.config ? this.config : undefined;
  };
  public startTypeorm = async () => {
    try {
      if (!this.config) Promise.reject('Please set configurations');
      this.connection = await createConnection(this.config).then(
        (connection) => {
          return connection.runMigrations().then(() => {
            return connection;
          });
        }
      );
    } catch (error) {
      if (error instanceof Error) Promise.reject(error);
    }
  };
}
