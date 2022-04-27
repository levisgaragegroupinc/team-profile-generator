// IMPORT PARENT CLASSS
const Employee = require('./employee');

// MANAGER CLASS
class Manager extends Employee { 
    constructor(name, id, email, officeNumber) {
        super(name, id, email); 
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager'; // Like this?
    }

    printData () {
        console.log(`Name: ${this.name} ID: ${this.id} Email: ${this.email} 
                    Office#: ${this.officeNumber} Role: ${this.getRole}`);
    }
 }

 // NEW EMPLOYEES
 const dave = new Manager('Dave', 1214, 'dave@skiforce.com', 710);

 // PRINT DATA
 dave.printData();

 module.exports = Manager;
