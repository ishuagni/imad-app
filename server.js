var express = require('express');
var morgan = require('morgan');
var path = require('path');
//const Pool = requires('pg-pool');

/*const config = {
    username : 'ishuagnihotri20',
    database : 'ishuagnihotri20',
    host : 'db.imad.hasura-app.io',
    port : '5432',
    password : 'db-ishuagnihotri20-18556'
};*/

var app = express();
app.use(morgan('combined'));

//var counter = 0;

var articles = {
    'article_one' : {
    title : "Shaurya | Article One",
    heading : "Article One",
    date : "Apr 2 2018",
    Content : `Serving Article 
                One` },
    'article_two' : {
    title : "Shaurya | Article two",
    heading : "Article two",
    date : "Apr 2 2018",
    Content : `Serving Article 
                two` },
    'article_three' : {
    title : "Shaurya | Article three",
    heading : "Article three",
    date : "Apr 2 2018",
    Content : `Serving Article 
                three` }
};

function createTemplate (data)
{
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var Content = data.Content;
    var htmlTemplate = `
        <html>
        <head>
            <title>${title}</title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div>
                <h3>${heading}</h3>
            </div>
            <div>
                <p>${date}</p>
            </div>
            <div>
                <p>${Content}</p>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}

/*const pool = new Pool(config);
app.get('/db-test', function(req, res){
        pool.query('Select * from test;',function(err, result){
            if(err){
                res.status(500).send(err.toString());
            }
            else{
                res.send(JSON.stringify(result));
            }
        });
});*/

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/counter', function (req, res) {
  counter += 1;
  res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
