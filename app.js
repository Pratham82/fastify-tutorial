import fastify from "fastify";
import fastifySwagger from "fastify-swagger";
const app = fastify({ logger: true });
import connectToDB from "./utils/db-connection.js";
import dotenv from "dotenv";
dotenv.config();
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import AutoLoad from "fastify-autoload";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//***** Running with fastify CLI and pretty Logs *****
export default async (fastify, _) => {
  // DB connection
  connectToDB();

  //Registering swagger
  fastify.register(fastifySwagger, {
    exposeRoute: true,
    routePrefix: "/docs",
    swagger: {
      info: { title: "fastify-crud" },
    },
  });

  // Registering autoload routes
  fastify.register(AutoLoad, {
    dir: join(__dirname, "routes"),
  });

  // Starting the server with iffie
  (async function main() {
    try {
      fastify.listen(process.env.PORT || 5000, () =>
        console.log(`Server Running on PORT ${process.env.PORT} ✅`)
      );
    } catch (error) {
      console.log(error);
      fastify.log.error(error);
      process.exit(1);
    }
  })();
};

//****** Running without Fastify CLI i.e with npm run dev ******
// DB connection
// connectToDB();
//
// //Registering swagger
// app.register(fastifySwagger, {
//   exposeRoute: true,
//   routePrefix: "/docs",
//   swagger: {
//     info: { title: "fastify-crud" },
//   },
// });
//
// // Registering autoload routes
// app.register(AutoLoad, {
//   dir: join(__dirname, "routes"),
// });
//
// // Starting the server with iffie
// (async function main() {
//   try {
//     app.listen(process.env.PORT || 5000, () =>
//       console.log(`Server Running on PORT ${process.env.PORT} ✅`)
//     );
//   } catch (error) {
//     console.log(error);
//     fastify.log.error(error);
//     process.exit(1);
//   }
// })();
