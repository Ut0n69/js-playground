export class Greeting {
  constructor(name) {
    this._name = name
  }

  sayHi() {
    document.write(`Hi ${this._name}`)
  }
}
