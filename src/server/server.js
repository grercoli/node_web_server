import express from "express"
// path es propio de Node y es para poder leer nuestras carpetas de la app
import path from "path"

export const startServer = (options) => {
  const { port, public_path = "public" } = options

  // ejecutamos express y ponemos todo dentro de la variable app
  const app = express()

  // para poder usar middlewares se usa la palabra use (es propio de Express)
  app.use(express.static(public_path)) // contenido estatico que ponemos disponible para que se use, estamos configurando contenido estatico, con esto se muestra la web. El contenido estatico es el build que hace con aplicaciones como Angular y React por ejemplo, lo terminado se podria decir. npm run build y la carpeta dist/ es la que va en public. IMPORTANTE: lo que hace un servidor es exponer la parte estatica

  // si el cliente nos hace una peticion el get escucha y actua
  // en este caso cualquier cosa que le pidan al server ("*"), podria ser ("/redpajarito")
  // req es la peticion que nos hacen y res es la respuesta que vamos a devolver nosotros
  app.get("*", (req, res) => {
    // path. para poder ingresar a nuestras carpetas (las de nuestra app)
    // __dirname se usa para poder entrar a nuestro directorio, hay que ponerlo
    // la carpeta public es dinamica entonces lo pongo a traves de la variable
    const indexPath = path.join(__dirname + `../../${public_path}/index.html`)
    
    res.send(indexPath)
  })

  // el listen es para tener el server disponible, es para poder escuchar y que si hay alguna peticion entonces haga lo que nosotros dijimos con el get de arriba por ejemplo. El listen abre un puerto y escucha por ese port
  app.listen(port, () => {
    console.log("Escuchando en el port:", port)
  })
}
