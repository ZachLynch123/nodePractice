const request = require('request');

describe('get messages', () => {
    it('should return 200 Ok', (done) => {
        request.get('http://localhost:5000/messages', (e, res) => {
            expect(res.statusCode).toEqual(200);
            done();
        });
    });
    it('should return list that is not empty', (done) => {
        request.get('http://localhost:5000/messages', (e, res) => {
            expect(JSON.parse(res.body).length).toBeGreaterThan(0);
            done();
        });
    });
});