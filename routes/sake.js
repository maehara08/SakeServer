/**
 * Created by riku_maehara on 2016/11/26.
 */
var express = require('express');
var moment = require('moment');
var router = express.Router();
var connection = require('../utils/mysql_util');


/* GET sake json */
router.get('/get', function (req, res, next) {
    var nowTime=moment().format("YYYY-MM-DD HH:mm:ss");
    var beforeTime = moment(nowTime).add(-1,'days').format("YYYY-MM-DD HH:mm:ss");
    var query = `select * from sake_table where created_at between timestamp('${beforeTime}') and timestamp('${nowTime}');`
    res.send(query);
    connection.query(query, function (err, result, field) {
        if (err) {
            console.error('error connecting: ' + err.stack);
        }
        res.send(result);
    });
});

router.post('/post', function (req, res) {
    var requestbody = req.body;

    var sakeName = requestbody.sakeName;
    var temperature = requestbody.temperature;
    var alcoholPercentage = requestbody.alcoholPercentage;

    var query = `insert into sake_db.sake_table (
  sake_name,
  temperature,
  alcohol_percentage
) values
('${sakeName}',${temperature},${alcoholPercentage});`;

    connection.query(query1, function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);

            res.send('error');
        }
    });

    res.send("/posts!!");
});

module.exports = router;