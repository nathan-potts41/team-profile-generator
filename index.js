const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "dist", 'team.html')
//const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/template-logic.js");
const { formatWithOptions } = require('util');
const teamMembers = [];
const idArray = [];

function appMenu() {
    function createManager() {
        console.log("Please build your team");
        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'managerName',
                    message: 'What is your name?',
                    validate: response => {
                        if (response) {
                            return true;
                        } else {
                            console.log('Please enter your name!')
                            return false;
                        }
                    }

                },
                {
                    type: 'input',
                    name: 'managerId',
                    message: 'What is your ID number?',
                    validate: response => {
                        const valid = /^[1-9]\d*$/.test(response);
                        if (valid) {
                            return true;
                        }
                        return 'Please enter a valid ID number!';
                    }
                },
                {
                    type: 'text',
                    name: 'managerEmail',
                    message: 'What is your email address?',
                    validate: response => {
                        if (response) {

                            return true;
                        } else {
                            console.log('Please enter your email!');
                            return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'managerOffice',
                    message: 'What is your office number?',
                    validate: response => {
                        const valid = /(?:[-\/\s.]|\d)+/.test(response);
                        if (valid) {
                            return true;
                        }
                        return 'Please enter a valid office number!';
                    }

                }
            ])
            // create a new manager object with data collected from above
            .then(answer => {
                const manager = new Manager(
                    answer.managerName,
                    answer.managerId,
                    answer.managerEmail,
                    answer.managerOffice
                );
                teamMembers.push(manager);
                idArray.push(answer.managerId);
                console.log(teamMembers);

                selectTeam();
            });

    }
    //WHEN I enter the team manager's name, id, email and number...THEN I am presented with a menu with the option to add an engineer, intern or finish building my team
    function selectTeam() {
        inquirer
            .prompt([
                //ask the user which type of team member they would like to add
                {
                    type: 'list',
                    name: 'memberChoice',
                    message: 'Which type of team member would you like to add?',
                    choices: [
                        'Engineer',
                        'Intern',
                        "I don't want to add any more team members"
                    ]
                }
            ])
            //based on the end users selection, use a switch statement to call the proper function for questions pertaning to that employee type
            .then(userChoice => {
                switch (userChoice.memberChoice) {
                    case 'Engineer':
                        addEngineer();
                        break;
                    case 'Intern':
                        addIntern();
                        break;
                    default:
                        buildTeam();
                }
            });
    }

    function addEngineer() {
        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'engineerName',
                    message: "What is your engineer's name?",
                    validate: response => {
                        if (response) {
                            return true;
                        } else {
                            console.log('Please enter your name!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'engineerId',
                    message: "What is your engineer's ID number?",
                    validate: response => {
                        const valid = /^[1-9]\d*$/.test(response);
                        if (valid) {
                            return true;
                        }
                        return 'Please enter a valid ID number!';
                    }
                },
                {
                    type: 'text',
                    name: 'engineerEmail',
                    message: "What is your engineer's email address?",
                    validate: response => {
                        if (response) {

                            return true;
                        } else {
                            console.log('Please enter your email!');
                            return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'engineerGithub',
                    message: "Please enter your engineer's Github name:",
                    validate: response => {
                        if (response) {

                            return true;
                        } else {
                            console.log("Please enter your engineer's github name.");
                            return false;
                        }
                    }
                }
            ])
            .then(answer => {
                const engineer = new Engineer(
                    answer.engineerName,
                    answer.engineerId,
                    answer.engineerEmail,
                    answer.engineerGithub
                );
                teamMembers.push(engineer);
                idArray.push(answer.engineerId);
                console.log(teamMembers);

                selectTeam();
            });
    }
    function addIntern() {
        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'internName',
                    message: "What is your intern's name?",
                    validate: response => {
                        if (response) {
                            return true;
                        } else {
                            console.log('Please enter your name!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'internId',
                    message: "What is your engineer's ID number?",
                    validate: response => {
                        const valid = /^[1-9]\d*$/.test(response);
                        if (valid) {
                            return true;
                        }
                        return 'Please enter a valid ID number!';
                    }
                },
                {
                    type: 'text',
                    name: 'internEmail',
                    message: "What is your engineer's email address?",
                    validate: response => {
                        if (response) {

                            return true;
                        } else {
                            console.log('Please enter your email!');
                            return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'internSchool',
                    message: "Please enter your intern's school:",
                    validate: response => {
                        if (response) {
                            return true;
                        } else {
                            console.log("Please enter your intern's school.");
                            return false;
                        }
                    }
                }
            ])
            .then(answer => {
                const intern = new Intern(
                    answer.internName,
                    answer.internId,
                    answer.internEmail,
                    answer.internSchool
                );
                teamMembers.push(intern);
                idArray.push(answer.internId);
                console.log(teamMembers);

                selectTeam();
            });
    }
    function buildTeam() {
        fs.writeFileSync(OUTPUT_DIR, render(teamMembers), 'utf-8');
    };
    createManager();
};



appMenu();

