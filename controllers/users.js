const User = require('../models/user.js')

/**
 * 
 * @param {*} req: empty  
 * @param {*} resp: list of all users
 */
const getAllUsers = async (_, resp) => {
  try {
    const all_users = await User.find({}) 
    resp.send({
      data: all_users
    })
  } catch (error) {
    fastify.log.error(error)
  }
}

/**
 * 
 * @param {*} req: user ID
 * @param {*} resp: details of the given user
 */
const getOneUser = async (req, resp) => {

}

module.exports = {getAllUsers}

