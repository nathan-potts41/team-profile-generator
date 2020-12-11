const Employee = require('../lib/Employee.js');

// jest.mock('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Dick', 1234, 'biggreenmachine@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets an employees name', () => {
    const employee = new Employee('Dick', 1234, 'biggreenmachine@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee ID number', () => {
    const employee = new Employee('Dick', 1234, 'biggreenmachine@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Dick', 1234, 'biggreenmachine@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('gets employee as position', () => {
    const employee = new Employee('Dick', 1234, 'biggreenmachine@gmail.com');

    expect(employee.getRole()).toBe('Employee');
})



