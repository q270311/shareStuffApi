const config = require('./dbconfig');
const mssql = require('mssql');

async function selectAllStuff() {
    try {
        const connection = await mssql.connect(config);
        const response = await connection.request().query("SELECT *  FROM dbo.stuff");
        return await response.recordsets;
    } catch (error) {
        console.log(error);
    }
}

async function selectStuff(stuffId) {
    try {
        const connection = await mssql.connect(config);
        const response = await connection.request()
            .input('id', mssql.Int, stuffId)
            .query("SELECT *  FROM dbo.stuff WHERE id=@id");
        return await response.recordsets;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    selectAllStuff: selectAllStuff,
    selectStuff: selectStuff,
};
