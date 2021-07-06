const User = require("../models/user.js");
const fastify = require("fastify");

/**
 *
 * @param {} req: empty
 * @param {Array} resp: list of all users
 */
const getAllUsers = async (_, rep) => {
  try {
    const all_users = await User.find({});
    rep.send({
      all_users,
    });
  } catch (error) {
    fastify.log.error(error);
  }
};

/**
 *
 * @param {id} req: user ID
 * @param {object} resp: details of the given user
 */
const getOneUser = async (req, rep) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    if (!user) return rep.send({ message: "User not found" });
    rep.send({
      user,
    });
  } catch (error) {
    fastify.log.error(error);
  }
};

/**
 *
 * @param {object} req: user object
 * @param {object} resp: details of the given user
 */
const createUser = async (req, rep) => {
  const { name, email, phone, city, state, country } = req.body;

  try {
    const newUser = new User({
      name,
      email,
      phone,
      city,
      state,
      country,
    });

    const user = await newUser.save();

    rep.send(user);
  } catch (e) {
    /* handle error */
    console.error(e.message);
    rep.status(500).send("Server Error");
  }
};

/**
 *
 * @param {object} req: user object to be updated
 * @param {object} resp: updated user
 */
const updateUser = async (req, rep) => {
  const { name, email, phone, city, state, country, area } = req.body;

  // Building user in case values not provided
  const userFields = {};
  if (name) userFields.name = name;
  if (email) userFields.email = email;
  if (phone) userFields.phone = phone;
  if (city) userFields.city = city;
  if (state) userFields.state = state;
  if (country) userFields.country = country;
  if (area) userFields.area = area;
  console.log(userFields);

  try {
    let user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ msg: "User not found" });

    user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: userFields },
      { new: true }
    );
    rep.send(user);
  } catch (err) {
    console.error(err.message);
    rep.status(500).send("Server Error");
  }
};

/**
 *
 * @param {id} req: user id to be deleted
 * @param {object} resp: result will be sent as message of delete operation
 */
const deleteUser = async (req, rep) => {
  try {
    let user = await User.findById(req.params.id);

    if (!user) return rep.status(404).send({ message: "User not found" });

    await User.findByIdAndRemove(req.params.id);

    rep.send({ msg: "User removed from DB" });
  } catch (err) {
    console.error(err.message);
    rep.status(500).send("Server Error");
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
