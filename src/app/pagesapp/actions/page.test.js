import * as page from './page';

describe('Testing page actions', () => {
    test('set push web page action', () => {
        const url = "new url";
        const expectedAction = {
            type: page.PUSH_WEB_PAGE,
            url
        };
        expect(page.pushWebPage(url)).toEqual(expectedAction);
    })

    test('set push page id action', () => {
        const id = "new id";
        const expectedAction = {
            type: page.PUSH_PAGE,
            id
        };
        expect(page.pushPage(id)).toEqual(expectedAction);
    })

    test('set pop page action', () => {
        const expectedAction = {
            type: page.POP_PAGE
        };
        expect(page.popPage()).toEqual(expectedAction);
    })
})

