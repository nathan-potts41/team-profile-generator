const Engineer = require('../lib/Engineer');

class Engineer extends Employee {
    constructor(github) {
        //when we extend the constructor we can add in the super
        //super(name);
        this.github = github;
    }

    //GitHub username
    getGithub() { }

    //Overridden to return 'Engineer'
    getRole() { }
};