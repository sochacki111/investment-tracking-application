import InvestmentTracker from '../components/InvestmentTracker';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Investment Tracker</h1>
      <InvestmentTracker />
    </main>
  );
}
