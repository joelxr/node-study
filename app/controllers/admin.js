module.exports.formulario_inclusao_noticia = function (application, req, res) {
    res.render("admin/form_add_noticia", {validacao : {}, noticia : {}});
}


module.exports.salvar_noticia = function (application, req, res) {
    var noticia = req.body;
    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve possuir entre 10 a 100 caracteres.').len(10,100);
    req.assert('autor', 'Autor é obrigatório.').notEmpty();
    req.assert('data_noticia', 'Data é obrigatória.').notEmpty();
    req.assert('noticia', 'Notícia é obrigatória.').notEmpty();
    var errors = req.validationErrors();

    if (errors) {
        res.render("admin/form_add_noticia", {validacao : errors, noticia : noticia});
        return;
    }

    var pool = application.config.db();
    pool.connect(function(err, client, done) {
        if (err) {
            return console.error('erro ao obter cliente do pool');
        }

        var dao = new application.app.models.NoticiasDAO(client);
        dao.salvarNoticia(noticia,  function(err, result) {
            done(err);

            if (err) {
                return console.error('error running query', err);
            }

            res.redirect('/noticias');
        });
    });
}
