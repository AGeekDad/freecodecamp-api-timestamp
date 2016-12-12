var express = require('express')


var app = express()

app.get('/', function (req, res) {
    
    var d = req.query.date;
    
    if(!d) {
        res.send(`{date: null, timestamp: null}`);
        return;
    }
    
    var timestamp = parseInt(d);
    var date = d;
    if(timestamp) {
        date = new Date(timestamp);
    }
    else {
        date = new Date(d);
        timestamp = date.getTime();
        if(!timestamp) {
            res.send(`{date: null, timestamp: null}`);
            return;
        }
    }
    
    res.send(`{ date: "` + date + `", timestamp: ` + timestamp + ` }`);
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

