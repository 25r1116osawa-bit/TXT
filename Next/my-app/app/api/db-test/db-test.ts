// /api/db-test.ts
const [rows] = await connection.query('SHOW TABLES');
res.json({ ok: true, rows });
