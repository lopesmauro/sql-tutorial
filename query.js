import mysql from 'mysql2/promise'
import { SELECT_QUERY, SELECT_QUERY_LIMIT, SELECT_SUBQUERY_SALARIO } from './query-sample.js'

const main = async () => {
    let client
    try{
        client = await mysql.createConnection({
            host: 'localhost',  
            user: 'devuser',
            password: 'devpassword',
            database: 'devdatabase',
        })
        const [rows] = await client.query(SELECT_SUBQUERY_SALARIO) 
        console.log("Total de registros: ", rows.length)
        console.log(rows)
    } catch(error) {
        console.log('Error: ', error)
    } finally {
        await client.end()
    }
}

main()

