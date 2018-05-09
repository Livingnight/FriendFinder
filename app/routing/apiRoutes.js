const friendData = require('../data/friends');

module.exports = app => {
    app.get('/api/friends', (req, res) => {
        return res.json(friendData);
    });
    app.post('/api/friends', (req, res) => {

    })
};