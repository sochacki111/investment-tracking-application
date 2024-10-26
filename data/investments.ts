import 'server-only';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function getInvestments() {
  const { rows } = await pool.query('SELECT * FROM investments');
  return rows;
}

export async function addInvestment(investment) {
  const { name, quantity, buyPrice, currentPrice } = investment;
  await pool.query(
    'INSERT INTO investments (name, quantity, buy_price, current_price) VALUES ($1, $2, $3, $4)',
    [name, quantity, buyPrice, currentPrice]
  );
}
