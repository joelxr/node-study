module.exports = function (application) {
    application.get('/formulario_inclusao_noticia', function (req, res) {
        res.render("admin/form_add_noticia");
    });

    application.post('/noticias/salvar', function (req, res) {
        var noticia = req.body;
        var pool = application.config.db();

        pool.connect(function(err, client, done) {
            if (err) {
                return console.error('erro ao obter cliente do pool');
            }

            var noticiasModel = application.app.models.noticiasModel;
            noticiasModel.salvarNoticia(client, noticia,  function(err, result) {
                done(err);

                if (err) {
                    return console.error('error running query', err);
                }

                res.redirect('/noticias');
            });
        });
    });
};

