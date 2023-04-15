const config = require("./dbconfig");
const mssql = require("mssql");

async function selectAllStuff() {
  try {
    const connection = await mssql.connect(config);
    const response = await connection
      .request()
      .query("SELECT *  FROM dbo.stuff");
    return response.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function selectStuff(stuffId) {
  try {
    const connection = await mssql.connect(config);
    const response = await connection
      .request()
      .input("id", mssql.Int, stuffId)
      .query("SELECT *  FROM dbo.stuff WHERE id=@id");
    return response.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function selectReservations(stuffId) {
  try {
    const connection = await mssql.connect(config);
    const response = await connection
      .request()
      .input("id", mssql.Int, stuffId)
      .execute("selectReservations1Months");
    return response.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function addStuff(stuff) {
  try {
    const connection = await mssql.connect(config);
    const insertStuff = await connection
      .request()
      .input("name", mssql.NVARCHAR(50), stuff.name)
      .input("description", mssql.NVARCHAR(255), stuff.description)
      .execute("addStuff");
    return insertStuff.recordsets;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  selectAllStuff: selectAllStuff,
  selectStuff: selectStuff,
  selectReservations: selectReservations,
  addStuff: addStuff,
};
