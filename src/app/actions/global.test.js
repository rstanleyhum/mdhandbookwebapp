import * as global from './global';

describe('Testing global action', () => {
    test('set user to a specific name', () => {
        const user = "username";
        const expectedAction = {
            type: global.SET_USER,
            user
        };
        expect(global.setUser(user)).toEqual(expectedAction);
    })
})

describe("Testing a global action", () => {
    test('set user to null', () => {
        const expectedAction = {
            type: global.SET_USER,
            user: null
        };
        expect(global.setUser(null)).toEqual(expectedAction);
    })
})