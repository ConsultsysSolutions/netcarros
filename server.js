const   express = require('express');
const     mysql = require('mysql');
const      cors = require('cors');

const       app = express();

const SELECT_ALL_CARROS_QUERY = 'SELECT * FROM carros';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'netcarros_db'
});

connectio.connect(err => {
  if(err) {
    return err;
  }
});

app.user(cors());
app.get('./client-side/src/index.js');
//app.get('./client-side', (req, res) = > {
//  connection.query(const SELECT_ALL_CARROS_QUERY, (err, results) => {
//    if(err) {
//
//    } else {res.json({
//        data:
//      })
//    }
//  });
//});

const port = 5000;

app.listen(port, () => console.log(`Servidor iniciado na porta ${port}`));
