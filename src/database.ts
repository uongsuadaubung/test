import {Pool} from 'pg'

export const pool = new Pool({
    user: 'postgres',
    host: "localhost",
    password: 'kien',
    database: 'test',
    port: 5432
})