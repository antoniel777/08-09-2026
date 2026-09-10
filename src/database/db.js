import pg from 'pg'
const { Pool } = pg
 
const pool = new Pool()
 

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})
 
 const fruta = await pool.query("SELECT * FROM fruta")

 console.log(fruta.rows)