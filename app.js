const fastify = require('fastify')({logger:true})
const connectToDB  = require('./utils/db-connection.js')
require('dotenv').config()

// DB connection
connectToDB()

// Registering routes
fastify.register(require('./routes/users.js'))

// Routes
fastify.get('/test', async (_,rep) =>{
  try {
   await rep.send('Hello World')
  } catch (error) {
    fastify.log.error(error)
  }
})

// Conventional starter
// const start = async () =>{ 
//   try {
//    await fastify.listen(process.env.PORT, () => console.log(`Server Running on ${process.env.PORT} ✅`)) 
//   } catch (error) {
//     fastify.log.error(error)
//     process.exit(1)
//   }
// }
// 
// start()

// Starting the server with iffie
;(async function main(){ 
  try {
   await fastify.listen(process.env.PORT, () => console.log(`Server Running on ${process.env.PORT} ✅`)) 
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
})()

