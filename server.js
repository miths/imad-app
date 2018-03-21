var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={ 
'article-one':{
    title: 'Article One | Mithil Ghinaiya',
    heading: 'Article One',
    date: 'Sep 5, 2018',
    content: 'This is content for my first article.'
},


'article-two': {  
    title: 'Article Two | Mithil Ghinaiya',
    heading: 'Article Two',
    date: 'Sep 10, 2018',
    content: 'This is content for my second article.'},
    
    
'article=three':{ 
    title: 'Article Three | Mithil Ghinaiya',
    heading: 'Article Three',
    date: 'Sep 15, 2018',
    content: 'This is content for my third article.'}
};

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;

var htmlTemplate =`
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device=width, initial-sca;e=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
        <div class="cont">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
            ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                <p>
                    ${content}
                </p>
                
            </div>
        </div>
    </body>
</html>


`;

return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});




// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
