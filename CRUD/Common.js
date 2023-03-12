const inquirer = require("inquirer");
function questions(massage1, massage2) {
  const inquirerquestion = [
    {
      name: "name",
      type: "input",
      message: massage1,
    },
    {
      name: "phone",
      type: "input",
      message: massage2,
    },
  ];
  return inquirer.prompt(inquirerquestion);
}

module.exports = {
    questions,
  };
