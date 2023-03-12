const table = require("./schema/schema.bootstrap");
const deletedData = async (data) => {
  try {
    const distroy = await table.tbls.books.destroy({
      where: {
        name: `${data.name}`,
      },
    });

    if (distroy === 0) {
      console.log("unnnSuccessfully record deleted.");
    } else {
      console.log("Successfully record deleted.");
    }
  } catch (error) {
    console.error("the problem is: " + error.message);
  }
};
module.exports = { deletedData };
//*bad practice*////
// function deletedData(data) {
//   con.sync().then(() => {
//     book
//       .destroy({
//         where: {
//           name: `${data.name}`,
//         },
//       })
//       .then((row) => {
//         if (row === 0) {
//           console.log("unnnSuccessfully deleted record.");
//         } else {
//           console.log("Successfully deleted record.");
//         }
//       })
//       .catch((error) => {
//         console.error("the problem is: " + error.message);
//       });
//   });
// }
