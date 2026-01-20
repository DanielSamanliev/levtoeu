import { Coins } from "lucide-preact";

interface ResultDisplayProps {
  priceInBGN: number;
  changeInBGN: number;
  changeInEuro: number;
  isValid: boolean;
}

export const ResultDisplay = ({
  changeInBGN,
  changeInEuro,
  isValid,
}: ResultDisplayProps) => {
  const formatCurrency = (amount: number) => {
    return amount.toFixed(2);
  };

  return (
    <div
      className="space-y-4 animate-fade-in"
      style={{ animationDelay: "0.1s" }}
    >
      {/* Change to give back */}
      <div
        className={`p-6 rounded-xl border-2 transition-all duration-300 ${
          isValid && changeInBGN >= 0
            ? "bg-primary/5 border-primary shadow-glow"
            : changeInBGN < 0
            ? "bg-destructive/5 border-destructive"
            : "bg-muted/50 border-border"
        }`}
      >
        <div className="flex items-center gap-4">
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isValid && changeInBGN >= 0
                ? "bg-gradient-primary"
                : changeInBGN < 0
                ? "bg-destructive"
                : "bg-muted"
            }`}
          >
            <Coins
              className={`w-7 h-7 ${
                isValid ? "text-primary-foreground" : "text-muted-foreground"
              }`}
            />
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-1">
              Ресто за връщане
            </p>
            <p
              className={`text-3xl font-bold transition-colors duration-300 ${
                changeInBGN < 0 ? "text-destructive" : "text-foreground"
              }`}
            >
              <div>
                {changeInBGN < 0 ? "-" : ""}
                {formatCurrency(Math.abs(changeInEuro))} €
              </div>
              <div>
                {changeInBGN < 0 ? "-" : ""}
                {formatCurrency(Math.abs(changeInBGN))} лв
              </div>
            </p>
            {changeInBGN < 0 && (
              <p className="text-sm text-destructive mt-1">
                Клиента дължи {formatCurrency(Math.abs(changeInBGN))} лв
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
