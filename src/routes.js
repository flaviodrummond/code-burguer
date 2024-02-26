import { Router } from "express" /* só vamos importar o express que é responsável pelas rotas que é o Router */
import UserConstroller from "./app/controllers/UserConstroller"
import SessionController from "./app/controllers/SessionController"
import ProductController from "./app/controllers/ProductController"

const routes =
  new Router() /* armazenamos nosso Router dentro de uma variável */

/* agora criamos nossa primeira rota, para saber se está tudo funcionando */

routes.post("/users", UserConstroller.store)

routes.post("/sessions", SessionController.store)

routes.post("/products", ProductController.store)

export default routes
