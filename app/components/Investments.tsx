"use server";
import { getInvestments } from "../../data/investments";
import InvestmentList from "./InvestmentList";

export default async function Investments() {
  const investments = await getInvestments();

  return (
    <div>
      <h1>Investments</h1>
      <InvestmentList investments={investments} />
    </div>
  );
}
