var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

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
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
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
