class BeatService {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  get firstName() {
    return this._firstName
  }
  get lastName() {
    return this._lastName
  }
  sayHi() {
    return `Hi, ${this.firstName} ${this.lastName}`
  }

  sayHi2() {
    return 'Hi, ' + this._firstName + ' ' + this._lastName;
  }

  set firstName(firstName) {
    this._firstName = firstName;
  }
  set lastName(lastName) {
    this._lastName = lastName;
  }
}

module.exports = BeatService;