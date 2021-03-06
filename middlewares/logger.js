// Fonction appelée à chaque appel d'une route Express
const loggerMiddleware = (req, res, next) => {
  if (req) {
    console.info(
            `[${new Date().toLocaleString()}]Requête ${req.method} reçue de ${req.ip} à destination de ${req.url}`
    )
  }
  next()
}

module.exports = loggerMiddleware
