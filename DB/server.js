const Sequelize = require("sequelize");
const schema = require("./schema/schema.bootstrap");
const database = creatDbInstance();

/*best practice*/
function creatDbInstance() {
  return new Sequelize("pgs", "root", "102030", {
    host: "localhost",
    dialect: "mysql",
    logging: false, //اینجا خط های کوئری داخل ترمینال کنسول لاگ گرفته نمیشه
  });
}
const creatTable = async () => {
  try {
    await database.authenticate(); //
    schema.makeTablesFromSchemas(database); //call schema to build table automaticly
    // console.log(schema);
    await database.sync();

  } catch (error) {
    return console.log(error);
  }
};
creatTable();
module.exports = { creatTable, creatDbInstance, database };


/*bad practice*/
// sequelizee
//   .authenticate()
//   .then(() => {
//     console.log("");
//   })
//   .catch((error) => {
//     console.error("Unable to connect to the database: ", error);
//   });

// how to call const
// example(sequelizee);
