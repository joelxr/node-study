module.exports.noticias = function (application, req, res) {
    var pool = application.config.db();

    pool.connect(function(err, client, done) {
        if (err) {
            return console.error('erro ao obter cliente do pool');
        }

        var dao = new application.app.models.NoticiasDAO(client);
        dao.getNoticias(function(err, result) {
            done(err);

            if (err) {
                return console.error('error running query', err);
            }

            res.render("noticias/noticias", {noticias : result.rows});
        });
    });
}

module.exports.noticia = function(application, req, res) {
    var pool = application.config.db();


    pool.connect(function(err, client, done) {
        if (err) {
            return console.error('erro ao obter cliente do pool');
        }

        var query = req.query;
        var dao = new application.app.models.NoticiasDAO(client);
        dao.getNoticia(query, function(err, result) {
            done(err);

            if (err) {
                return console.error('error running query', err);
            }

            res.render("noticias/noticia", {noticia : result.rows[0]});
        });
    });
}
