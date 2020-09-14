export type Class = { new (...args: any[]): any };

export const isClass = (object: any): object is Class => {
  return object;
};
