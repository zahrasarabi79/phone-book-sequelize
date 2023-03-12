const inquirer = require("inquirer");
const add = require("./CRUD/ADD");
const deleted = require("./CRUD/Delete");
const updatename = require("./CRUD/UpdateName");
const updatNumber = require("./CRUD/Updatephone");
const DB = require("./DB/server");

(async () => {
  await DB.creatTable();
  const inquirerOptions = [
    {
      name: "phonebook",
      type: "list",
      message: "what do you want?",
      choices: ["add number", "updat number", "updat name", "delete number"],
    },
  ];

  let inquirerResult = await inquirer.prompt(inquirerOptions);
  const total = {
    "add number": add,
    "updat number": updatNumber,
    "updat name": updatename,
    "delete number": deleted,
  };

  await total[inquirerResult.phonebook]();
})();
