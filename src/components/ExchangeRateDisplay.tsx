import { RefreshCw } from "lucide-preact";

interface ExchangeRateDisplayProps {
  rate: number;
}

export const ExchangeRateDisplay = ({ rate }: ExchangeRateDisplayProps) => {
  return (
    <div className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-secondary/70 border border-border animate-fade-in">
      <RefreshCw className="w-4 h-4 text-primary animate-pulse-soft" />
      <span className="text-sm font-medium text-muted-foreground">
        1 Евро ={" "}
        <span className="text-foreground font-semibold">{rate.toFixed(4)}</span>{" "}
        лв
      </span>
    </div>
  );
};
