export class Greeting {
  constructor(name) {
    this._name = name
  }

  sayHi() {
    console.log(`Hi ${this._name}`)
  }
}
