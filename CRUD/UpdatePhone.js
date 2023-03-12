const common = require("./Common");
const DB = require("../DB/book.updateNumber");
async function dataQuestions() {
  let data = await common.questions(
    "What is your name?",
    "write a new number "
  );
  await DB.updateNumberOf(data);
}
module.exports = dataQuestions;
