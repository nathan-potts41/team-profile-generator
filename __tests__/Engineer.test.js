const Engineer = require('../lib/Engineer');

// jest.mock('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Dick', 1234, 'biggreenmachine@gmail.com', 'nathanpotts41');

    expect(engineer.github).toEqual(expect.any(String));
})

test('gets github username', () => {
    const engineer = new Engineer('Dick', 1234, 'biggreenmachine@gmail.com', 'nathanpotts41');

    expect(engineer.getGithub()).toEqual(expect.any(String))
})

test('gets role of engineer', () => {
    const engineer = new Engineer('Dick', 1234, 'biggreenmachine@gmail.com', 'nathanpotts41');

    expect(engineer.getRole()).toBe('Engineer');
})