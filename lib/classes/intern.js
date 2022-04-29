// IMPORT PARENT CLASSS
const Employee = require("./employee");

// INTERN
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    console.log(this.school);
    return this.school;
  }
}

module.exports = Intern;
