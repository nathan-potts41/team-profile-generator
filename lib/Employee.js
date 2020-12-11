const inquirer = require("inquirer");

class Employee {
    constructor(name = '', id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name 
        // //run in index.js
        // inquirer
        //     .prompt({
        //         type: 'text',
        //         name: 'name',
        //         message: 'What is your name?'
        //     })
        //     this.getName(name);
    };

    getId() {
        return this.id 
        // inquirer
        // .prompt({
        //     type: 'number',
        //     name: 'id',
        //     message: 'What is your ID number?'
        // })
        // .then(({ id }) => {
        //     this.id = id;
        // })
    };

    getEmail() {
        return this.email
    };
};

module.exports = Employee
