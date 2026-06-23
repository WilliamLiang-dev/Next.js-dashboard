// test-db.js
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL, {
  ssl: 'require',
});

async function test() {
  const result = await sql`SELECT NOW()`;
  console.log(result);
}

test();
