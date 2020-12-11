const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        //when we extend the constructor we can add in the super
        super(name, id, email);

        this.github = github;
    }

    //GitHub username
    getGithub() {
        return this.github
    }

    //Overridden to return 'Engineer'
    getRole() {
        return this.role = 'Engineer'
    }
};

module.exports = Engineer;