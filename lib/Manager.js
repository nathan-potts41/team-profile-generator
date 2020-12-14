const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)

        this.officeNumber = office
    }

    getRole() {
        return 'Manager'
    }

    generateTemplateLiteral() {
        return `<div class="col s12 m3">
        <div class="card small hoverable">
            <div class="card-title blue darken-3 center-align">
                <h3 class=" white-text">${this.name}</h3>
                <h4 class=" white-text computer">${this.getRole()}</h4>
            </div>
            <div class="card-content center-align">
                <div>ID: ${this.id}</div>
                <div>Email:<a href="${this.email}"> ${this.email}</a></div>
                <div>Office: ${this.officeNumber}</div>
            </div>
        </div>
    </div>`;
    }

}

module.exports = Manager