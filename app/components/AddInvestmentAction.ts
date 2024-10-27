'use server';

import { addInvestment } from '@/data/investments';

export async function AddInvestmentAction({
  name,
  quantity,
  buyPrice,
  currentPrice,
}: {
  name: string;
  quantity: number;
  buyPrice: number;
  currentPrice: number;
}) {
  return addInvestment({
    name,
    quantity,
    buyPrice,
    currentPrice,
  });
}
