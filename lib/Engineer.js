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
        return 'Engineer'
    }

    generateEngineer() {
        return `<div class="col s12 m3">
		<div class="card small hoverable">
			<div class="card-title blue darken-3">
				<h3 class=" white-text">${this.name}</h3>
				<h4 class=" white-text computer">${this.getRole()}</h4>
			</div>
			<div class="card-content">
				<div>ID: ${this.id}</div>
				<div>Email:<a href="${this.email}"> ${this.email}</a></div>
			</div>
			<!-- only engineers will have this section -->
			<div class="card-action">
				<a href="https://github.com/${this.github}" target="_blank">GitHub</a>
			</div>
			<!-- only engineers will have this section -->
		</div>
	</div>`;
    }
};

module.exports = Engineer;