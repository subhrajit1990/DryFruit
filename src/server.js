const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, '../src/index.html'));
});


// check extension and set mime type
// HTTP Status: 200 : OK
if (ext === 'css') {
  // check for css
  response.writeHead(200, {'Content-Type': 'text/css'});
} else {
  // Content Type: text/plain
  // maybe also check .html type
  res.writeHead(200, {'Content-Type': 'text/html'});
}



app.listen(port, () => {
   console.log('Server is up!');
});