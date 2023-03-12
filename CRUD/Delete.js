const inquirer = require("inquirer");
const DB = require("../DB/book.deleted");
const common = require("./Common");
const dataQuestions = async () =>
  confirmDelete(
    await common.questions("what is your name?", "what is your phone?")
  );
async function confirmDelete(data) {
  const deleteQuestion = [
    {
      name: "delete",
      type: "confirm",
      message: "Do you want to delete this person?",
    },
  ];
  return selectConfirm(await inquirer.prompt(deleteQuestion),data);
}
async function selectConfirm(ResultOfquestionDelete, data) {
  return ResultOfquestionDelete.delete
    ? DB.deletedData(data)
    : console.log("Delete contact canceled");
}
module.exports = dataQuestions;
