const table = require("./schema/schema.bootstrap");

const server= require("./server")

const insertData = async (data) => {
  const datainput = {
    name: `${data.name}`,
    phone: `${data.phone}`,
  };
  try {
   await server.database.models.books.create(datainput)
    // await table.tbls.books.create(datainput);
        console.log("done");
  } catch (error) {
    console.log(error);
  }
};

// async function insertData(data) {

//     .then(() => {
//       book
//         .create({
//           name: `${data.name}`,
//           phone: `${data.phone}`,
//         })
//         .then(() => {
//           console.log("done");
//         })
//         .catch((error) => {
//           console.error("the problem is: " + error.message);
//         });
//     })
//     .catch((error) => {
//       console.error("Unable to create table : ", error);
//     });
// }
module.exports = { insertData };
