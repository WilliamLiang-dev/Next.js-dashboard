// test-db.js
import postgres from 'postgres';

const sql = postgres(process.env.postgresql://neondb_owner:npg_6ASH3PkZyOhR@ep-quiet-darkness-atyikd77-pooler.c-9.us-east-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require);

async function test() {
  const result = await sql`SELECT NOW()`;
  console.log(result);
}

test();
