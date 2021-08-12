// Requires
const express = require('express')
const cors = require('cors')
require('dotenv').config()

// * Variables de entorno
const PORT = process.env.PORT

// Inicializar
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Importar rutas
const appRoutes = require('./routes/app.routes')

// Rutas
app.use('/', appRoutes)

// * Listener
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT} 🚀`)
})
