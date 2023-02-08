const express = require('express');

const app = express();

app.get('/', (request, response) => {
    //
    response.send('hello world');
});


app.get('/print', (request, response) => {
    //
    var userinput = request.query.name;

    response.send(`hello ${userinput}`);

});

app.listen(8085, () => {
    console.log("Port 8085 is now connected");
});