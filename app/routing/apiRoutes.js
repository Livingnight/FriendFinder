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
        console.log(`sum 1: ${sum1}`);
        let friendDiff = [];

        friendData.forEach(value => {
            // console.log(value.answers);
            let sum2 = value.answers.reduce((a, b) => a + b, 0);
            console.log(`sum2: ${sum2}`);
            let friendTest = Math.abs(sum1 - sum2);
            console.log(`friend test: ${friendTest}`);
            console.log(`friendScore: ${friendScore}`);
            friendDiff.push(friendTest);
        });
        console.log(`friendDiff: ${friendDiff}`);
        let min = Math.min(...friendDiff);
        console.log(`min: ${min}`);
        const friendIndex = friendDiff.indexOf(min);
        console.log(`index of friendDiff(min): ${friendIndex}`);
        res.json(JSON.stringify(friendData[friendIndex]));

        friendData.push(userData);
        friendScore = sum1;

    })
};