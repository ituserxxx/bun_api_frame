import { Connection } from "mysql2/promise";

const mysql = require('mysql2/promise');

let connection : Connection;

async function connectToDatabase() {
    const connection = await mysql.createConnection({
        host: '0.0.0.0',
        user: 'root',
        password: 'root',
        database: 'paopao'
    });

    console.log('Connected to database');

    return connection;
}
export async  function load_db(){
    try {
        connection = await connectToDatabase();
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export function execSql(sql: string): Promise<any> {
    return new Promise((resolve, reject) => {
        connection.execute(sql)
            .then(([results]) => {
                resolve(results);
            })
            .catch(error => {
                reject(error);
            });
    });
}