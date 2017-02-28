module.exports = function(app) {
    app.get('/noticia', function (req, res) {
        var pool = app.config.db();

        pool.connect(function(err, client, done) {
            if (err) {
                return console.error('erro ao obter cliente do pool');
            }

            var query = client.query('select * from noticias where id_noticia = 1');

            query.on('row', function(row, result) {
                result.addRow(row);
            });

            query.on('error', function () {
                return console.error('erro ao executar a query');
            });

            query.on('end', function (result) {
                res.render("noticias/noticia", {rows : result.rows});
            });
        });
    });
};
