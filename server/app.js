const express = require('express');
const path = require('path');
const request = require('request');
const app = express();

let API_KEY = "25efc79b246bb8daa4de485407f979d5-us16";
let LIST_ID = "ae89d41329";

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.get('/subscribe', (req, res) => {
    var options = {
        uri: `https://us16.api.mailchimp.com/3.0/lists/${LIST_ID}/members/`,
        method: 'POST',
        headers: {
            "user": `anystring:${API_KEY}`,
            "Content-Type": "application/json",
            "Authorization": "Basic YW55OjI1ZWZjNzliMjQ2YmI4ZGFhNGRlNDg1NDA3Zjk3OWQ1LXVzMTY="
        },
        json: {
            "email_address": req.query.email_address,
            "status": "subscribed",
            "merge_fields": {
                "FNAME": req.query.first_name,
                "LNAME": req.query.last_name
            }
        }
    };
    request(options, function(error, response, body) {
        res.send(body);
    })
});

module.exports = app;
