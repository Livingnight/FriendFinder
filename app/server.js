const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./routing/apiRoutes')(app);
require('./routing/htmlRoutes')(app);


app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});