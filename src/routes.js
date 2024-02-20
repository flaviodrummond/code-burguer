import { Router } from "express" /* só vamos importar o express que é responsável pelas rotas que é o Router */
import UserConstroller from "./app/controllers/UserConstroller"

const routes =
  new Router() /* armazenamos nosso Router dentro de uma variável */

/* agora criamos nossa primeira rota, para saber se está tudo funcionando */

routes.post("/users", UserConstroller.store)

export default routes
