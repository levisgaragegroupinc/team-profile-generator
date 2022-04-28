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
  }

  printData() {
    console.log(
      `Name: ${this.name} ID: ${this.id} Email: ${this.email} Role: ${this.getRole}`
    );
  }
}

// NEW EMPLOYEES
const joran = new Engineer("Joran", 1218, "joran@skiforce.com", "joransmith");

// PRINT DATA
joran.printData();

module.exports = Engineer;
