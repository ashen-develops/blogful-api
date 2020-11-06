const knex = require('knex');
const app = require('./app');

const { PORT, DB_URL } = require('./config');

const db = knex({
  clent: 'pg',
  connection: DB_URL,
});

app.set('db', db);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening at http://localhost:${PORT}`);
});