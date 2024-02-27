import multer from "multer"
import { v4 } from "uuid"
import { extname, resolve } from "path"

export default {
  storage: multer.diskStorage({
    /* Aqui dentro, preciso mandar as configurações do Multer, primeiro é saber onde quero guardar os arquivos que vou fazer upload e o nome do arquivo  */
    destination: resolve(__dirname, "..", "..", "uploads"),
    filename: (request, file, callback) => {
      return callback(null, v4() + extname(file.originalname))
    },
  }),
}
