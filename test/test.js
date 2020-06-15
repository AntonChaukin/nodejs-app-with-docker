const axios = require('axios');

describe('test visitors', () => {
    axios.defaults.baseURL = 'http://127.0.0.1:4001';
    const tests = [
        {test: 'First', visitors: '1'},
        {test: 'Second', visitors: '2'}
    ];
    tests.map((item) => {
        test(`${item.test} test may be ${item.visitors} visitor, -s`, async () => {
            const res = await axios.get('/');
            expect(res.data).toEqual(`Number of visits: ${item.visitors}`);
        });
    });
})