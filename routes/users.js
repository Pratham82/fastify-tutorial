const {getAllUsers} = require('../controllers/users.js')


function userRoutes (fastify, options,done) {
  // Get all Users
  fastify.get('/api/users', getAllUsers)

  //*TODO 
  // Get one User
  // Add User
  // Delete User
  // Update User
  done()
}

module.exports = userRoutes
