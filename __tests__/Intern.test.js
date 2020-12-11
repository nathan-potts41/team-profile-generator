const Intern = require('../lib/Intern.js');

// jest.mock('../lib/Intern.js')

test('create an intern constructor', () => {
    const intern = new Intern('Dick', 1234, 'biggreenmachine@gmail.com', 'Vanderbilt');

    expect(intern.school).toEqual(expect.any(String));
})

test('gets interns school', () => {
    const intern = new Intern('Dick', 1234, 'biggreenmachine@gmail.com', 'Vanderbilt');

    expect(intern.getSchool()).toEqual(expect.any(String));
})

test('gets interns role', () => {
    const intern = new Intern('Dick', 1234, 'biggreenmachine@gmail.com', 'Vanderbilt')

    expect(intern.getRole()).toBe('Intern');
})