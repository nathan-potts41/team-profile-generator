const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/template-logic.js");
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
                    type: 'number',
                    name: 'managerId',
                    message: 'What is your ID number?',

                    // validation does not work, seek help!!!
                    validate: response => {
                        if (response) {
                            return true;
                        } else {
                            console.log('Please enter your ID number!');
                            return false;
                        }
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
                        if (response) {

                            return true;
                        } else {
                            console.log('Please enter your office number!')
                            return false;
                        }
                    }

                }
            ])
            .then(answer => {
                const manager = new Manager(
                    answer.managerName,
                    answer.managerId,
                    answer.managerEmail,
                    answer.managerOffice
                );
                teamMembers.push(manager);
                idArray.push(answer.managerId);
                console.log(manager);
            });

    }
    createManager();
};



appMenu();
