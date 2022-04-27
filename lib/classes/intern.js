// IMPORT PARENT CLASSS
const Employee = require('./employee');

// INTERN
class Intern extends Employee { 
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return 'Intern';
    }
    getSchool() {
        console.log(this.school);
    };

    printData () {
        console.log(`Name: ${this.name} ID: ${this.id} Email: ${this.email} Role: ${this.getRole} School: ${this.school}`);
    }
 }

 // NEW EMPLOYEES
 const mike = new Intern('Mike', 1220, 'mike@skiforce.com', 'South Carolina University');

 // PRINT DATA
 mike.printData();

 module.exports = Intern;