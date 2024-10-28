import { getInvestments } from "../../../data/investments";

export default async function Investments() {
  const investments = await getInvestments();

  return (
    <div>
      <h1>Investments</h1>
      {investments.map((investment) => (
        <li key={investment.id}>{investment.name}</li>
      ))}
    </div>
  );
}
