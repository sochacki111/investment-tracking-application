'use server';
import { addInvestment } from '@/data/investments';
import { InvestmentToInsert } from '../types/investment-to-insert';

export async function addInvestmentAction({
  name,
  quantity,
  buyPrice,
  currentPrice,
}: InvestmentToInsert) {
  return addInvestment({
    name,
    quantity,
    buyPrice,
    currentPrice,
  });
}
