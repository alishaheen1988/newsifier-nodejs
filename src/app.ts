import express from 'express';
import { getGiff } from './giphy';
const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors())
const router = express.Router();

router.route( '/giffs/:searchtext/:offset' ).get( getGiff );
app.use(router)

app.get('/', (req, res) => {
  res.send('Giphy App Is Running!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});