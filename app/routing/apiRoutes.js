const friendData = require('../data/friends');

module.exports = app => {
    app.get('/api/friends', (req, res) => {
        return res.json(friendData);
    });
    app.post('/api/friends', (req, res) => {
        const userData = req.body;
        // let differenceArray = [];
        console.log(userData);
        let array = userData.answerArr.map(Number);
        const sum1 = array.reduce((a, b) => a + b, 0);
        let friendScore = sum1;
        let friendMatch;
        console.log(`sum 1: ${sum1}`);
        friendData.forEach(value => {
            console.log(value.answers);
            let sum2 = value.answers.reduce((a, b) => a + b, 0);
            console.log(`sum2: ${sum2}`);
            let friendTest = Math.abs(sum1 - sum2);
            console.log(`friend test: ${friendTest}`);
            if (friendTest <= friendScore) {
                friendScore = friendTest;
                friendMatch = value;
                console.log(friendMatch);
            }
        });
        console.log(`friend match: ${JSON.stringify(null, 2, friendMatch)}`);
        friendData.push(userData);

        res.send(JSON.stringify(friendMatch));
        res.json(true);

    })
};