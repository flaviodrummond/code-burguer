import { Router } from "express" /* só vamos importar o express que é responsável pelas rotas que é o Router */
import { v4 } from "uuid"
import User from "./app/models/User"

const routes =
  new Router() /* armazenamos nosso Router dentro de uma variável */

/* agora criamos nossa primeira rota, para saber se está tudo funcionando */

routes.get("/", async (request, response) => {
  const user = await User.create({
    id: v4(),
    name: "Flávio Drumond",
    email: "flaviodrumonnd@gmail.com",
    password_hash: "134856",
  })
  return response.json(user)
})

export default routes
