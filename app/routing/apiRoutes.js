const friendData = require('../data/friends');

module.exports = app => {
    app.get('/api/friends', (req, res) => {
        return res.json(friendData);
    });
    app.post('/api/friends', (req, res) => {
        console.log(req.body);
        const userData = req.body;
        // let differenceArray = [];
        console.log(typeof(userData.answers));
        console.log(userData.answers);
        let array = userData.answers.map(Number);
        const sum1 = array.reduce((a, b) => a + b, 0);
        let friendScore = sum1;
        console.log(`sum 1: ${sum1}`);
        let friendDiff = [];

        friendData.forEach(value => {
            let array2 = value.answers.map(Number);
            console.log(`Entire object: ${JSON.stringify(value, null, 2)}
            ----------------------------------------`);

            console.log(`answer values: ${value.answers}`);
            let sum2 = array2.reduce((a, b) => a + b, 0);
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