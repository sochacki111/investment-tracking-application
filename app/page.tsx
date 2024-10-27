import { AddInvestmentForm } from "./components/AddInvestmentForm";
import InvestmentsPage from "./investments/page";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Investment Tracker</h1>
      <InvestmentsPage />
      <AddInvestmentForm />
    </main>
  );
}
