const common = require("./Common");
const DB = require("../DB/book.updateName");
async function dataQuestions() {
  let data = await common.questions(
    "write a new name for previous number:",
    "What is your previous number?"
  );
await DB.updateNameOf(data);
}
module.exports = dataQuestions;
