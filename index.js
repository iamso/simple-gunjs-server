const port = process.env.PORT || process.argv[2] || 1234;

const express = require('express');
const app = express();

const Gun = require('gun');
const gun = Gun({
  file: 'data.json',
  s3: {
    key: '', // AWS Access Key
    secret: '', // AWS Secret Token
    bucket: '' // The bucket you want to save into
  }
});

gun.wsp(app);
app.use(express.static(__dirname)).listen(port);

console.log('Server started on port ' + port + ' with /gun');
