// TEAM PROFILE GENERATOR

// REQUIRE
const inquirer = require("inquirer");
const fs = require("fs");

// CLASS FILES
const Manager = require("./lib/classes/manager");
const Engineer = require("./lib/classes/engineer");
const Intern = require("./lib/classes/intern");

// HTML TEMPLATE SNIPPETS
const createMain = require("./src/templates/main");
const createManager = require("./src/templates/manager");
const createEngineer = require("./src/templates/engineer");
const createIntern = require("./src/templates/intern");

// STORE EMPLOYEES HERE FROM PROMPT INPUT
const listOfEmployees = [];

const newEmployee = () => {
  addTeamMemberPrompt().then(function (erole) {
    switch (erole.role) {
      case "Manager":
        newManager();
        break;
      case "Engineer":
        newEngineer();
        break;
      case "Intern":
        newIntern();
        break;
      case "Finnish":
        buildTeam();
        break;
      // could add a exit program here
      default:
        console.log("Sorry, no valid choice selected.");
    }
  });
};

// ADD ANOTHER TEAM MEMBER PROMPT
const addTeamMemberPrompt = () => {
  return inquirer.prompt([
    {
      type: "list",
      message: "Select team member role:",
      name: "role",
      choices: ["Manager", "Engineer", "Intern", "Finnish"],
    },
  ]);
};

// ADD MANAGER
const newManager = () => {
  return managerPrompt().then(function (emdata) {
    let eManager = new Manager(
      emdata.name,
      emdata.id,
      emdata.email,
      emdata.officeNumber
    );
    listOfEmployees.push(eManager);
    newEmployee();
  });
};

// ADD ENGINEER
const newEngineer = () => {
  return engineerPrompt().then(function (eedata) {
    let eEngineer = new Engineer(
      eedata.name,
      eedata.id,
      eedata.email,
      eedata.github
    );
    listOfEmployees.push(eEngineer);
    newEmployee();
  });
};

// ADD INTERN
const newIntern = () => {
  return internPrompt().then(function (eidata) {
    let eIntern = new Intern(
      eidata.name,
      eidata.id,
      eidata.email,
      eidata.school
    );
    listOfEmployees.push(eIntern);
    newEmployee();
  });
};

// BUILD MY TEAM ORIGINAL
const buildTeam = () => {
  let eList = "";
  listOfEmployees.forEach(function (edata) {
    console.log(edata);
    if (edata.officeNumber) {
      eList += createManager(edata);
    } else if (edata.github) {
      eList += createEngineer(edata);
    } else if (edata.school) {
      eList += createIntern(edata);
    } else {
      console.log("There was an error building your team!");
    }
  });
  let indexHTML = createMain(eList);
  fs.writeFile("index.html", indexHTML, (err) =>
    err ? console.error(err) : console.log("Successfully generated HTML file!")
  );
};

// MANAGER PROMPT
const managerPrompt = () => {
  return inquirer.prompt([
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
      name: "officeNumber",
    },
  ]);
};

// ENGINEER PROMPT
const engineerPrompt = () => {
  return inquirer.prompt([
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
      name: "github",
    },
  ]);
};

// INTERN PROMPT
const internPrompt = () => {
  return inquirer.prompt([
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
      name: "school",
    },
  ]);
};

newEmployee();
