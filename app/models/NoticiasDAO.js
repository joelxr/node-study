function NoticiasDAO (client) {
    this._client = client;
}

NoticiasDAO.prototype.getNoticia = function(callback) {
    this._client.query('select * from noticias where id_noticia = 1', callback);
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    this._client.query('select * from noticias', callback);
}

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
    this._client.query("insert into noticias (id_noticia, titulo, noticia, data_criacao) values (nextval('seq_id_noticia'), $1, $2, now())", [noticia.titulo, noticia.noticia], callback);
};


module.exports = function () {
    return NoticiasDAO;
};
