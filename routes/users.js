import {
  getAllUsers,
  getOneUser,
  createUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

function userRoutes(fastify, options, done) {
  // Get all Users
  fastify.get("/api/users", getAllUsers);
  // Get one User
  fastify.get("/api/users/:id", getOneUser);
  // Add User
  fastify.post("/api/users", createUser);
  // Delete User
  fastify.delete("/api/users/:id", deleteUser);
  // Update User
  fastify.put("/api/users/:id", updateUser);
  done();
}

// module.exports = userRoutes;
export default userRoutes;
