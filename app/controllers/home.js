module.exports.index = function (application, req, res) {

    var pool = application.config.db();
    pool.connect(function(err, client, done) {
        if (err) {
            return console.error('erro ao obter cliente do pool');
        }

        var dao = new application.app.models.NoticiasDAO(client);
        dao.getUltimasNoticias(function(err, result) {
            done(err);

            if (err) {
                return console.error('error running query', err);
            }

            res.render("home/index", {noticias : result.rows});
        });
    });
}
