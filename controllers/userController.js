const { User } = require("../models/index");

// add user
const addUser = async (req, res) => {
  try {
    const { firstname, lastname, email, mobile } = req.body;
    let userInfo = { firstName: firstname, lastName: lastname, email, mobile };
    const user = await User.create(userInfo);
    if (user) {
      let resposne = {
        success: true,
        message: "User registered successfully",
        data: user,
      };
      res.status(200).json(resposne);
    } else {
      let resposne = {
        success: false,
        error: {
          message: "Something went wrong",
        },
      };
      res.status(200).json(resposne);
    }
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      const errors = error.errors.map((err) => ({
        field: err.path,
        message: err.message, // Retrieve the custom error message defined in the model
      }));
      res.status(400).json({ errors });
    } else {
      // Handle other types of errors
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

// get all users
/* const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["firstName", "lastName", "email", "mobile"],
    });

    let resposne = {
      success: true,
      data: users,
    };
    res.status(200).json(resposne);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; */

const getUsers = async (req, res) => {
  try {
    const { firstName, lastName, email, mobile } = req.query;

    const whereClause = {};
    if (firstName) {
      whereClause.firstName = firstName;
    }
    if (lastName) {
      whereClause.lastName = lastName;
    }
    if (email) {
      whereClause.email = email;
    }
    if (mobile) {
      whereClause.mobile = mobile;
    }

    const users = await User.findAll({
      attributes: ["firstName", "lastName", "email", "mobile"],
      where: whereClause,
    });

    let response = {
      success: true,
      data: users,
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get one user
const getOneUser = async (req, res) => {
  try {
    let id = req.params.id;
    let user = await User.findOne({ where: { id: id } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    let resposne = {
      success: true,
      data: user,
    };
    res.status(200).json(resposne);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update user
const updateUser = async (req, res) => {
  try {
    let id = req.params.id;
    const user = await User.update(req.body, { where: { id: id } });
    if (user[0] === 0) {
      let resposne = {
        success: false,
        error: { message: "User not found" },
      };
      return res.status(404).json(resposne);
    }
    let resposne = {
      success: true,
      message: "User updated successfully",
    };
    res.status(200).json(resposne);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete user
const deleteUser = async (req, res) => {
  try {
    let id = req.params.id;
    const user = await User.destroy({ where: { id: id } });
    if (!user) {
      let resposne = {
        success: false,
        error: { message: "User not found" },
      };
      return res.status(404).json(resposne);
    }
    let resposne = {
      success: true,
      message: "User deleted successfully",
    };
    res.status(200).json(resposne);
  } catch (error) {
    let resposne = {
      success: false,
      error: error.message,
    };
    res.status(500).json(resposne);
  }
};

module.exports = {
  addUser,
  getUsers,
  getOneUser,
  updateUser,
  deleteUser,
};
