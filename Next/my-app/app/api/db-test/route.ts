// app/api/db-test/route.ts

// app/api/db-test/route.ts
import { NextResponse } from 'next/server'
import mariadb from 'mariadb'

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'list_app',
})

export async function GET() {
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query('SELECT * FROM users')
    return NextResponse.json(rows)
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'DB error' }, { status: 500 })
  } finally {
    if (conn) conn.release()
  }
}
