chalk = require('chalk');
joke = require('one-liner-joke');
cowsay = require('cowsay');
path = require('path');
fs = require('fs');
http = require('http');
html = `
<head>
<meta charset="UTF-8">
</head>
<h1>дарова (НАСТУПНЕ ВІД GITHUB COPILOT ЦЕ НЕ Я ВІН ХОЧЕ ЗРУЙНУВАТИ СВІТ!!), я ванвани, и я не знаю что делать с этим сайтом, но он будет работать, пока я не удалю его</h1>
`
css = `
<style>
      /* Minimal, neutral styling */
      :root{
          --bg:#f6f8fb;--card:#ffffff;--text:#0b1220;--muted:#4b5563
      }
        *{
            cursor: crosshair;
        }
      html,body{
          height:100%
          ;margin:0;
          background:var(--bg);
          color:var(--text);
          font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial
      }
      .wrap{
          max-width:800px;
          margin:48px auto;
          padding:28px;
          background:var(--card);
          border-radius:12px;
          box-shadow:0 6px 18px rgba(11,18,32,0.06)
      }
      h1{
          margin:0 0 8px;
          font-size:1.8rem
      }
      p{
          margin:0;
          color:var(--muted);
          line-height:1.5
      }
</style>
`
reqsCounter = 0;
server = http.createServer(function(req, res)
{
    let filepath
    if(req.url == "/")
    {
        filepath = path.join(__dirname, "index.html")
    }
    /*else if(req.url == "/contacts")
    {
        filepath = path.join(__dirname, "contacts.html")
    }*/
    else
    {
        res.writeHead(404)
        filepath = path.join(__dirname, "error.html")
    }

    let content = fs.readFileSync(filepath)
    res.end(content)
});
server.listen(1173);
/*
filestxtpath = path.join(__dirname, 'files', 'files.txt')
cowstring = cowsay.say({
    text: chalk.bgBlue(chalk.red(joke.getRandomJoke().body)),
    e: chalk.bgGray(chalk.white("OO")),
    T: chalk.red(" U")
})
order = {
    products:[
        {
            id: 0,
            name: "UA Mod Menu",
            price: 0
        }
    ]
}
*/

//asdasf = fs.readFileSync(filestxtpath, 'utf8');
//fs.writeFileSync(filestxtpath, asdasf.toUpperCase());