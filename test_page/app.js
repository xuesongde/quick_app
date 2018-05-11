var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// 代理插件
var proxy = require('http-proxy-middleware');
// 跨域插件
var cors = require('cors');

var app = express();
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static')));
// 设置代理
app.use('/jygoods-api', proxy({
    target: 'https://m.jyall.com',
    changeOrigin: true
}));
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req
        .app
        .get('env') === 'development' ?
        err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
app.listen(4001, function() {
    console.log('http://localhost:4001')
});