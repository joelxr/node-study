function NoticiasDAO (client) {
    this._client = client;
}

NoticiasDAO.prototype.getNoticia = function(query, callback) {
    this._client.query("select * from noticias where id_noticia = " + query.id_noticia, callback);
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    this._client.query('select * from noticias order by data_criacao desc', callback);
}

NoticiasDAO.prototype.getUltimasNoticias = function (callback) {
    this._client.query('select * from noticias order by data_criacao desc limit 5', callback);
}

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
    this._client.query(
            "insert into noticias (id_noticia, titulo, noticia, data_criacao, resumo, autor, data_noticia) values (nextval('seq_id_noticia'), $1, $2, now(), $3, $4, $5)",
            [
                noticia.titulo,
                noticia.noticia,
                noticia.resumo,
                noticia.autor,
                noticia.data_noticia
            ],
            callback);
};


module.exports = function () {
    return NoticiasDAO;
};
