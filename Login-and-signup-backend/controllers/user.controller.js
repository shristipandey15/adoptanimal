const user = require("../models/user");

//Register
const signUp = async (req, res) => {
  try {
    const newUser = new user({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    });

    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
};

//login
const login = (req, res) => {
  console.log("----------");
  try {
    const { name, password } = req.body;

    if (!name || !password) {
      return res
        .status(400)
        .json({ msg: "Please fill name and password correctly" });
    }
    if (password.length <= 5) {
      return res.status(400).json({ msg: "password is wrong" });
    }

    res.json({ isTrue: "yes" });
  } catch (err) {}
};

//get users
const allUser = async (req, res) => {
  try {
    const users = await user.find();
    return res.status(200).json({
      success: true,
      existingusers: users,
    });
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
};

//get a specific user
const getUserById = ( async (req, res) => {
  try {
    const userId = req.params.id;

    const id = await user.findById(userId);

    return res.status(200).json({
      success: true,
      user: id,
    });
  } catch (err) {
    return res.status(400).json({ success: false, err });
  }


});

//update users
const update =( async (req, res) => {
  try {
    const updateuser = {
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,

    };``

    const updateduser = await user.findByIdAndUpdate(
      req.params.id,
      updateuser,
      { new: true }
    );

    if (!updateduser) {
      return res.status(404).json({ error: "user not found" });
    }

    return res.status(200).json({
      success: true,
      update: updateduser,
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
});

// delete user
const deleteUser = ( (req, res) => {
  user.findByIdAndRemove(req.params.id).exec((err, deleteuser) => {
    if (err)
      return res.status(400).json({
        message: "Delete unsuccesfull",
        err,
      });

    return res.json({
      message: "Delete Succesfull",
      deleteuser,
    });
  });
});

module.exports = {
  signUp,update,getUserById,allUser,deleteUser,login
};
