const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }

    generateIntern() {
        return `<div class="col s12 m3">
		<div class="card small hoverable">
			<div class="card-title blue darken-3 center-align">
				<h3 class=" white-text">${this.name}</h3>
				<h4 class=" white-text computer">${this.getRole()}</h4>
			</div>
			<div class="card-content">
				<div>ID: ${this.id}</div>
                <div>Email:<a href="${this.email}"> ${this.email}</a></div>
                <div>School: ${this.school}</div>
			</div>
		</div>
	</div>`;
    }
};

module.exports = Intern;