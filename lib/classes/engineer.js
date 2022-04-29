// IMPORT PARENT CLASSS
const Employee = require("./employee");

// ENGINEER CLASS
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }

  getGithub() {
    console.log(this.github);
    return this.github;
  }
}

module.exports = Engineer;
