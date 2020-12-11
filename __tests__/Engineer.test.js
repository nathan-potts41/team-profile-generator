const Engineer = require('../lib/Engineer');

jest.mock('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Jim');
    expect(engineer.name).toBe('Jim');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('jim.doe@gmail.com');
    expect(engineer.github).toBe('minnesotaNyst')
});