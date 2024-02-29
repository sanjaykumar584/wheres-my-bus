import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import pg from 'pg';

const app = express();
const port = 3001;

// DB config
const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'busApp',
  password: 'sanjay584',
  port: 5432,
});
db.connect();

// CORS
app.use(cors({ origin: true }));
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});
app.options('*', cors()); 

// Body Parser middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API endpoints

app.post ('/login', (req, res) => {
    const userData = req.body
    console.log(userData);
});

app.listen(port, () => {
    console.log(`Server listening to port: ${port}`);
  });
  