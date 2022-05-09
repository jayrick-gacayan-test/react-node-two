const express = require('express');

const PORT = process.env.PORT || 5001;

const app = express();

app.get(
    "/api/hello",
    (req, res) => {
        res.send("Hello world from Express");
    }
);

app.get(
    "/api/helloJSON",
    (req, res) => {
        res.json(
            {
                message: "Hello JSON from Express"
            }
        );
    }
);

app.listen(
        PORT, 
        () => {
            console.log(`Server is listening on ${ PORT }.`);
        }
    ); 