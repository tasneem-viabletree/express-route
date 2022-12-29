require('dotenv').config();
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const { sendRequestToEtherscan, getHistoryArray, sendEmailToAdmin } = require('./util');
const router = express.Router();


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// const whitelist = ['http://127.0.0.1:5500'];
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     }
// };

router.get('/', function (req, res) {
    return res.json({ foo: 'barshs' });
});

app.use(router);
app.listen(process.env.PORT);
console.log(`server at http://localhost:${process.env.PORT}`);