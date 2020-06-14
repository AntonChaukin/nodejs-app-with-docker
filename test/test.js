const axios = require('axios');

describe('first test', () => {
    axios.defaults.baseURL = 'http://127.0.0.1:4001'
    test('get visitors', async () => {
        const res = await axios.get('/');
        expect(res.data).toEqual('Number of visits: 1');
    });
})