const fastify = require("fastify")({ logger: true });
const connectToDB = require("./utils/db-connection.js");
require("dotenv").config();

// DB connection
connectToDB();

//Registering swagger
fastify.register(require("fastify-swagger"), {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    info: { title: "fastify-crud" },
  },
});

// Registering routes
fastify.register(require("./routes/users.js"));

// Starting the server with iffie
(async function main() {
  try {
    await fastify.listen(process.env.PORT || 5000, () =>
      console.log(`Server Running on PORT ${process.env.PORT} ✅`)
    );
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
})();

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
