const server = require("./server");
const updateNameOf = async (data) => {
  try {
    await server.database.models.books.update(
      {
        name: `${data.name}`,
      },
      {
        where: { phone: `${data.phone}` },
      }
    );
  } catch (err) {
    console.error("the problem is: " + err.message);
  }
};
module.exports = { updateNameOf };
