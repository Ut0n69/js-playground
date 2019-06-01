interface IPerson {
  getName(): string
  getAge(): number
}

export class Person implements IPerson {
  private _name: string
  private _age: number

  constructor({ name, age }) {
    this._name = name
    this._age = age
  }

  public getName(): string {
    return this._name
  }

  public getAge(): number {
    return this._age
  }
}
