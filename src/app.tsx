import "./app.css";
import { ChangeCalculator } from "./components/ChangeCalculator";

export function App() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 sm:p-6">
      <ChangeCalculator />
    </main>
  );
}
