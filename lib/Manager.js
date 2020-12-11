const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(office) {
        super(Employee)

        this.officeNumber = office
    }


}

module.exports = Manager