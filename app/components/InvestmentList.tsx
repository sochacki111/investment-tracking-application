
export default function InvestmentList({ investments }) {
  return (
    <ul>
      {investments.map((investment) => (
        <li key={investment.id}>{investment.name}</li>
      ))}
    </ul>
  );
}
