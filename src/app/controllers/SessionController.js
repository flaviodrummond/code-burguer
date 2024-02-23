import * as Yup from "yup"
import User from "../models/User"

class SessionController {
  async store(request, response) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    })

    if (!(await schema.isValid(request.body))) {
      return response
        .status(400)
        .json({ error: "E-mail e Senha incorreto, favor conferir os dados" })
    }
    const { email, password } = request.body

    const user = await User.findOne({
      where: { email },
    })
    if (!user) {
      return response
        .status(400)
        .json({ error: "E-mail e Senha incorreto, favor conferir os dados" })
    }
    return response.json(user)
  }
}

export default new SessionController()
