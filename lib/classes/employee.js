// EMPLOYEE CLASS
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    console.log(this.name);
    return this.name;
  }
  getId() {
    console.log(this.id);
    return this.id;
  }
  getEmail() {
    console.log(this.email);
    return this.email;
  }

  getRole() {
    return "Employee";
  }

  printData() {
    console.log(`Name: ${this.name} ID: ${this.id} email: ${this.email}`);
  }
}

// // NEW EMPLOYEES
// const jarvis = new Employee("Jarvis", 1010, "jarvis@skiforce.com");

// // PRINT DATA
// jarvis.printData();

module.exports = Employee;
