const Manager = require('../lib/Manager.js');

test('creates the property for github', () => {
    const manager = new Manager('Dick', 1234, 'biggreenmachine@gmail.com', 144141)

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of manager', () => {
    const manager = new Manager('Manager')

    expect(manager.getRole()).toBe('Manager');
})