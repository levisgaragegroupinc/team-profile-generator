// Team Profile Generator

// REQUIRE
const inquirer = require('inquirer');
const fs = require('fs');

// CLASS FILES
const Employee = require('./lib/classes/employee');
const Manager = require('./lib/classes/manager');
const Engineer = require('./lib/classes/engineer');
const Intern = require('./lib/classes/intern');

// ROLES
const employeeRole = {
    Manager: '',
    Engineer: '',
    Intern: ''
}; 




// Start of generate readme function
const createTeamMembers = (data) =>


// End of generate readme function

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter team manager name:',
      name: 'name',
    },
    {
        type: 'input',
        message: 'Employee ID:',
        name: 'id',
      },
      {
        type: 'input',
        message: 'Email address:',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Office number:',
        name: 'office',
      },
    
      {
        type: 'list',
        message: 'Add team member:',
        name: 'teammember',
        choices: [
            'Manager',
            'Engineer', 
            'Intern',
            'Finished'
        ],
      }])
      .then((data) => {
        console.log(data);
        const employeeData = createTeamMembers(data);

inquirer
  .prompt([
      {
        type: 'input',
        message: 'Enter engineer name:',
        name: 'name',
      },
      {
        type: 'input',
        message: 'Employee ID:',
        name: 'id',
      },
      {
        type: 'input',
        message: 'Email address:',
        name: 'email',
      },
      {
        type: 'input',
        message: 'GitHub username:',
        name: 'githubusername',
      },
      {
        type: 'list',
        message: 'Add team member:',
        name: 'teammember',
        choices: [
            'Manager',
            'Engineer', 
            'Intern',
            'Finished'
        ],
      }])
      .then((data) => {
        console.log(data);
        const employeeData = createTeamMembers(data);

inquirer
  .prompt([
      {
        type: 'input',
        message: 'Enter intern name:',
        name: 'name',
      },
      {
        type: 'input',
        message: 'Employee ID:',
        name: 'id',
      },
      {
        type: 'input',
        message: 'Email address:',
        name: 'email',
      },
      {
        type: 'input',
        message: 'School:',
        name: 'email',
      },
      {
        type: 'list',
        message: 'Add team member:',
        name: 'teammember',
        choices: [
            'Manager',
            'Engineer', 
            'Intern',
            'Finished'
        ],
      },

  ])
  .then((data) => {
    console.log(data);
    const employeeData = createTeamMembers(data);

// Write file 
    fs.writeFile("index.html", employeeData, (err) => 
            err ? console.error(err) : console.log("Successfully created team member!")
    );
  });
