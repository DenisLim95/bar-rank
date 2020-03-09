class UserService {
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
  set firstName(firstName) {
    this._firstName = firstName;
  }
  set lastName(lastName) {
    this._lastName = lastName;
  }
}


module.exports = UserService;