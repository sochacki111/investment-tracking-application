import 'server-only';
import { db } from "@/db/drizzle";
import { investment } from '@/db/schema';

export async function getInvestments() {
  const investments = await db.select().from(investment);
  return investments;
}

export async function addInvestment(investmentToInsert: {
  name: string;
  quantity: number;
  buyPrice: number;
  currentPrice: number;
}) {
  console.log(investmentToInsert);
  await db.insert(investment).values({
    name: investmentToInsert.name,
    quantity: investmentToInsert.quantity,
    buyPrice: String(investmentToInsert.buyPrice),
    currentPrice: String(investmentToInsert.currentPrice),
  });
}
