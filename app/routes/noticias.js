module.exports = function(application) {
    application.get('/noticias', function (req, res) {
        var pool = application.config.db();

        pool.connect(function(err, client, done) {
            if (err) {
                return console.error('erro ao obter cliente do pool');
            }

            var noticiasModel = application.app.models.noticiasModel;
            noticiasModel.getNoticias(client,  function(err, result) {
                done(err);
                if (err) {
                    return console.error('error running query', err);
                }
                res.render("noticias/noticias", {noticias : result.rows});
            });
        });
    });
};
