const book = require("./books");
// console.log(book)
const tables = [book];
let tbls = {};
function makeTablesFromSchemas(sequelize) {
  return tables.map(({ name, columns, conf }) => {
    tbls[name] = sequelize.define(name, columns, conf);
  });
}
// export
module.exports = {
  makeTablesFromSchemas,
  tbls,
  tables,
};
