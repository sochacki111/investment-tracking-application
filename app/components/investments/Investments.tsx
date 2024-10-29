import { getInvestments } from "../../../data/investments";

export default async function Investments() {
  const investments = await getInvestments();

  const totalInvestment = investments.reduce(
    (sum, inv) => sum + Number(inv.quantity) * Number(inv.buyPrice),
    0
  );

  const totalCurrentValue = investments.reduce(
    (sum, inv) => sum + Number(inv.quantity) * Number(inv.currentPrice),
    0
  );

  const totalGainLoss = totalCurrentValue - totalInvestment;
  const gainLossPercentage = (totalGainLoss / totalInvestment) * 100;

  return (
    <div className="space-y-6">
      <h1>Investments</h1>

      {/* Financial Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg">
          <h2>Total Investment</h2>
          <p>${totalInvestment.toFixed(2)}</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h2>Current Value</h2>
          <p>${totalCurrentValue.toFixed(2)}</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h2>Total Gain/Loss</h2>
          <p className={totalGainLoss >= 0 ? 'text-green-600' : 'text-red-600'}>
            ${totalGainLoss.toFixed(2)} ({gainLossPercentage.toFixed(2)}%)
          </p>
        </div>
      </div>

      {/* Original investments list */}
      {investments.map((investment) => (
        <li key={investment.id}>{investment.name}</li>
      ))}
    </div>
  );
}
