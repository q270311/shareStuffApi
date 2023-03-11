const config = require('./dbconfig');
const mssql = require('mssql');

async function selectAllStuff() {
    try {
        const connection = await mssql.connect(config);
        const response = await connection.request().query("SELECT *  FROM dbo.stuff");
        return await response.recordsets;
    } catch (error) {
        console.log(" mathus-error :" + error);
    }
}

module.exports = {
    selectAllStuff: selectAllStuff,
};
