const express = require('express');
const app = express();

app.get('/', (_, res) => res.send('Hello from AWS CI/CD'));
app.get('/health', (_, res) => res.send('OK'));

if(require.main === module) {
    app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
}

module.exports = app;