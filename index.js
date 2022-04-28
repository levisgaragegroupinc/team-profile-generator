// Team Profile Generator

// REQUIRE
const inquirer = require("inquirer");
const fs = require("fs");

// CLASS FILES
const Employee = require("./lib/classes/employee");
const Manager = require("./lib/classes/manager");
const Engineer = require("./lib/classes/engineer");
const Intern = require("./lib/classes/intern");

// HTML TEMPLATE SNIPPETS
const createMain = require("./src/templates/main");
const createManager = require("./src/templates/engineer");
const createEngineer = require("./src/templates/engineer");
const createIntern = require("./src/templates/intern");

// ROLES
// const employeeRole = {
//     Manager: '',
//     Engineer: '',
//     Intern: ''
// };

// STORE EMPLOYEES HERE FROM PROMP INPUT
const listOfEmployees = [];

// START OF GENERATE TEAM MEMBERS FUNCTION
// const createTeamMembers = (data) =>

// first prompt asks for the team manager info
// second prompt asks whether they want to add an engineer or intern
// user selects engineer for example, else exit out and generate html page
// third prompt asks for engineer info
// fourth prompt asks whether they want to add an intern
// user selects intern, else exit out and generate the html page
// fifth prompt asks for intern info
// generate html page

newEmployee();

const newEmployee = () => {
  addTeamMemberPrompt().then(function (erole) {
    switch (erole.role) {
      case "manager":
        newManager;
        break;
      case "engineer":
        newEngineer;
        break;
      case "intern":
        newIntern;
        break;
      case "finnish":
        buildTeam;
      default:
        console.log("Sorry, no valid choice selected.");
    }
  });
};

// ADD MANAGER
const newManager = () => {
  managerPrompt().then(function (emdata) {
    let eManager = new Manager(
      emdata.name,
      emdata.id,
      emdata.email,
      emdata.office
    );
    listOfEmployees.push(eManager);
  });
  newEmployee();
};

// ADD ENGINEER
const newEngineer = () => {
  engineerPrompt().then(function (eedata) {
    let eEngineer = new Engineer(
      eedata.name,
      eedata.id,
      eedata.email,
      eedata.githubusername
    );
    listOfEmployees.push(eEngineer);
  });
  newEmployee();
};

// ADD INTERN
const newIntern = () => {
  internPrompt().then(function (eidata) {
    let eIntern = new Intern(
      eidata.name,
      eidata.id,
      eidata.email,
      eidata.school
    );
    listOfEmployees.push(eIntern);
  });
  newEmployee();
};

// BUILD MY TEAM
const buildTeam = () => {};

// MANAGER PROMPT
const managerPrompt = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter team manager name:",
      name: "name",
    },
    {
      type: "input",
      message: "Employee ID:",
      name: "id",
    },
    {
      type: "input",
      message: "Email address:",
      name: "email",
      // could add a email validation step here.
    },
    {
      type: "input",
      message: "Office number:",
      name: "office",
    },
    {
      type: "confirm",
      message: "Confirm Manager role:",
      name: "manager",
    },
    {
      type: "confirm",
      message: "Add another team member?",
      name: "newE",
    },
  ]);
};

// ENGINEER PROMPT
const engineerPrompt = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter engineer name:",
      name: "name",
    },
    {
      type: "input",
      message: "Employee ID:",
      name: "id",
    },
    {
      type: "input",
      message: "Email address:",
      name: "email",
    },
    {
      type: "input",
      message: "GitHub username:",
      name: "githubusername",
    },
    {
      type: "confirm",
      message: "Confirm Engineer role:",
      name: "engineer",
    },
    {
      type: "confirm",
      message: "Add another team member?",
      name: "newE",
    },
  ]);
};

// INTERN PROMPT
const internPrompt = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter intern name:",
      name: "name",
    },
    {
      type: "input",
      message: "Employee ID:",
      name: "id",
    },
    {
      type: "input",
      message: "Email address:",
      name: "email",
    },
    {
      type: "input",
      message: "School:",
      name: "email",
    },
    {
      type: "confirm",
      message: "Confirm Intern role:",
      name: "intern",
    },
    {
      type: "confirm",
      message: "Add another team member?",
      name: "newE",
    },
  ]);
};

// ADD ANOTHER USER PROMPTS
const addTeamMemberPrompt = () => {
  inquirer.prompt([
    {
      type: "list",
      message: "Select team member role:",
      name: "role",
      choices: ["manager", "engineer", "intern"],
    },
  ]);
};

// one for selecting either engineer or intern
// one for selecting engineer
// one for selecting intern

//   .then((data) => {
//     console.log(data);
//     const employeeData = createTeamMembers(data);

// Write file
//     fs.writeFile("index.html", employeeData, (err) =>
//             err ? console.error(err) : console.log("Successfully created team member!")
//     );
//   });

//   {
//     type: 'list',
//     message: 'Add team member:',
//     name: 'teammember',
//     choices: [
//         'Manager',
//         'Engineer',
//         'Intern',
//         'Finished'
//     ],
//     },
