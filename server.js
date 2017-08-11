var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
    title:'Article One|Ujwala Sawant',
    header:'Article One',
    date:'11 August 2017',
    content:` <p>
                   This is first article.
                   This is first article.
                   This is first article.
                   This is first article.
                   This is first article.
                   This is first article.
               </p>
               <p>
                   This is first article.
                   This is first article.
                   This is first article.
                   This is first article.
                   This is first article.
                   This is first article.
               </p>`
    
};

function createTemplate(data)
{
var title=data.title;
var heading=data.heading;
var date=data.date;
var conetnt=data.content;

var htmlTemplate = 
    `<html>
    <head>
        <title>${title}</title>
           <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body class="container">
        <div>
           <a href="/">Home</a> 
           <hr/>
           <h3>
               ${heading}
           </h3>
           <div>
              ${date}
           </div>
           <div>
             ${content}
           </div>
        </div>
    </body>
</html>`
    return htmlTemplate;
}




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/article-one', function (req, res) {
   res.send(createTemplate(articleOne));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
