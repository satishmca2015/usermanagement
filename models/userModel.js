module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "First name is required",
          },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Last name is required",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Email cannot be empty.'
          },
          isEmail: {
            args: true,
            msg: 'Invalid email format.'
          }
        }
      },
      mobile: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Mobile number is required",
          },
          is: {
            args: /^[0-9]+$/,
            msg: "Mobile number must contain only digits",
          },
          len: {
            args: [8, 15],
            msg: "Mobile number should be between 8 to 15 digits",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Password is required",
          },
          len: {
            args: [6, 100], 
            msg: "Password should be at least 6 characters long",
          },
        },
      },
    },
    {
      tableName: "users",
      timestamps: true,
    }
  );

  return User;
};
