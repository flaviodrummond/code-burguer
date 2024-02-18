module.exports = {
  dialect: "postgres" /* banco de dados que estou utlizando */,
  host: "localhost",
  username: "postgres",
  password: "134896",
  database: "codeburguer" /* Qual será o nosso banco de dados */,
  define: {
    timespamps: true /* Sempre que crio dado no banco de dados, ele já cria automaticamente, além de criar mais dois campos que são a data da criação e a data da atualização */,
    underscored: true,
    underscoredAll: true /* Esse doissempre vão criar em caixa baixa e separados com underline */,
  },
}
