import fastify from "fastify";
import fastifySwagger from "fastify-swagger";
const app = fastify({ logger: true });
import connectToDB from "./utils/db-connection.js";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/users.js";

// DB connection
connectToDB();

//Registering swagger
app.register(fastifySwagger, {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    info: { title: "fastify-crud" },
  },
});

// Registering routes
app.register(userRoutes);

// Starting the server with iffie
(async function main() {
  try {
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server Running on PORT ${process.env.PORT} ✅`)
    );
  } catch (error) {
    console.log(error);
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
