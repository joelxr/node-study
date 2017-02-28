var pg = require('pg');

var pool = function () {
    var config = {
        user: 'postgres',
        database: 'portal_noticias',
        password: 'admin',
        host: 'localhost',
        port: '5432',
        max: 10,
        idleTimeoutMillis: 30000
    };

    return new pg.Pool(config);
};

module.exports = function () {
    return pool;
};
