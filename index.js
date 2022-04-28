// TEAM PROFILE GENERATOR

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

// STORE EMPLOYEES HERE FROM PROMPT INPUT
const listOfEmployees = [];

// first prompt asks for the team member role.
// user selects either manager, engineer, or intern.
// I could also add an exit program option.
// user inputs for the role, then are taken back to add team member prompt
// user can continue to add team members
// when user selects finnish the build team is called
// finaly the generate html is called

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
      emdata.office
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
      eedata.githubusername
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

// BUILD MY TEAM
const buildTeam = () => {
  let eList = "";
  listOfEmployees.forEach(function (edata) {
    console.log(edata);
    if (edata.office) {
      eList += createManager(edata);
    } else if (edata.githubusername) {
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
      name: "office",
    },
    // {
    //   type: "confirm",
    //   message: "Add another team member?",
    //   name: "newE",
    // },
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
      name: "githubusername",
    },
    // {
    //   type: "confirm",
    //   message: "Add another team member?",
    //   name: "newE",
    // },
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
    // {
    //   type: "confirm",
    //   message: "Add another team member?",
    //   name: "newE",
    // },
  ]);
};

newEmployee();
