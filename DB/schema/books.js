const { DataTypes } = require("sequelize");
const book = {
  name: "books",
  columns: {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
    },
  },
  conf: {
    timestamps: false,
  },
};


const spre = { book };
// console.log(spre);
module.exports = {...book };
