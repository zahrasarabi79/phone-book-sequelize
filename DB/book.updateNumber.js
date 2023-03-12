const server = require("./server");
const updateNumberOf = async (data) => {
  const database = server.creatDbInstance();
  try {
    await server.database.models.books.update(
      {
        phone: `${data.phone}`,
      },
      {
        where: { name: `${data.name}` },
      }
    );
  } catch (err) {
    console.error("the problem is: " + err.message);
  }
};
module.exports = { updateNumberOf };
