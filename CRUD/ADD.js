const common = require("./Common");
const DB = require("../DB/book.controller");
async function dataQuestions() {
  let data = await common.questions(
    "what is your name?",
    "what is your phone?"
  );
  await DB.insertData(data);
}

module.exports = dataQuestions;
