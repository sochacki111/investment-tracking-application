import 'server-only';
import { db } from "@/db/drizzle";
import { investment } from '@/db/schema';
import { InvestmentToInsert } from '../app/types/investment-to-insert';

export async function getInvestments() {
  const investments = await db.select().from(investment);
  return investments;
}

export async function addInvestment(investmentToInsert: InvestmentToInsert) {
  await db.insert(investment).values({
    name: investmentToInsert.name,
    quantity: investmentToInsert.quantity,
    buyPrice: String(investmentToInsert.buyPrice),
    currentPrice: String(investmentToInsert.currentPrice),
  });
}
