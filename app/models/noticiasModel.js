module.exports = function () {

    this.getNoticia = function(client, callback) {
        client.query('select * from noticias where id_noticia = 1', callback);
    };

    this.getNoticias = function(client, callback) {
        client.query('select * from noticias', callback);
    };

    this.salvarNoticia = function (client, noticia, callback) {
        client.query(
                "insert into noticias (id_noticia, titulo, noticia, data_criacao) values (nextval('seq_id_noticia'), $1, $2, now())",
                [noticia.titulo, noticia.noticia],
                callback);
    };

    return this;
};
