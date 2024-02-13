import { Router } from "express" /* só vamos importar o express que é responsável pelas rotas que é o Router */

const routes =
  new Router() /* armazenamos nosso Router dentro de uma variável */

/* agora criamos nossa primeira rota, para saber se está tudo funcionando */

routes.get("/", (request, response) => {
  return response.json({ message: "Hello World" })
})

export default routes
