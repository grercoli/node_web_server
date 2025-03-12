import { envs } from "./config/env.js"
import { startServer } from "./server/server.js"

const main = () => {
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH
  })
}

// realizo una funcion auto-ejecutada o auto-convocada agnostica (porque no tiene nombre) de manera asincrona
(async () => {
  main()
})()

// funcion agnostica auto-ejecutable
// (() => {})()
