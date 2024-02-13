import express from "express" /* importando o express */
import routes from "./routes" /* importando as nossas rotas */

class App {
  /* criamos nossa class app e dentro dela começamos com o método constructor, (lembrando que toda vez que estâncio minha class com o new app. O método constructor é chamado) */
  constructor() {
    /* dentro do constructor, deixo meu express disponível, dando um this. app */
    this.app = express()

    /* Toda vez que minha aplicação começar a rodar, preciso que minha rota e meu middlewares, comece a rodar. Por isso trago os middlewares e as routes para dentro do meu constructor */

    this.middlewares()
    this.routes()
  }

  /* Dentro da minha class, ainda crio dois métodos, que é o middlewares e as routes */

  middlewares() {
    /* no express, eu preciso avisar que vamos usar o json */
    this.app.use(express.json())
  }

  routes() {
    this.app.use(routes)
  }
}

export default new App().app /* agora exportando o meu app */
