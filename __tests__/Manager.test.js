const Manager = require('../lib/Manager.js');

test('creates the property for github', () => {
    const manager = new Manager(144141)

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('creates role of manager', () => {
    const manager = new Manager(true)

    expect(manager.getRole()).toBe(true);
})