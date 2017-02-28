module.exports = function () {

    this.getNoticia = function(client, callback) {
        client.query('select * from noticias where id_noticia = 1', callback);
    };

    this.getNoticias = function(client, callback) {
        client.query('select * from noticias', callback);
    };

    return this;
};
