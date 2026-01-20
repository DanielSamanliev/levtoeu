import { CurrencyInput } from "./CurrencyInput";
import { ResultDisplay } from "./ResultDisplay";
import { ExchangeRateDisplay } from "./ExchangeRateDisplay";
import { Button } from "./ui/button";
import { RotateCcw, Euro, Wallet } from "lucide-preact";
import { useState, useMemo, useCallback } from "preact/hooks";

const EXCHANGE_RATE = 1.95583;

export const ChangeCalculator = () => {
  const [priceEUR, setPriceEUR] = useState("");
  const [givenBGN, setGivenBGN] = useState("");

  const { priceInBGN, changeInBGN, changeInEuro, isValid } = useMemo(() => {
    const priceInEUR = parseFloat(priceEUR) || 0;
    const amountGivenBGN = parseFloat(givenBGN) || 0;
    const priceInBGN = priceInEUR * EXCHANGE_RATE;

    return {
      priceInBGN,
      changeInBGN: amountGivenBGN - priceInBGN,
      changeInEuro: priceInEUR - amountGivenBGN / EXCHANGE_RATE,
      isValid: priceEUR !== "" && givenBGN !== "",
    };
  }, [priceEUR, givenBGN]);

  const handleReset = useCallback(() => {
    setPriceEUR("");
    setGivenBGN("");
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8 animate-fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary shadow-glow mb-4">
          <div className="flex items-center gap-1">
            <Euro className="w-6 h-6 text-primary-foreground" />
            <Wallet className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Калкулатор на Ресто
        </h1>
        <p className="text-muted-foreground text-sm">
          Изчислете ресто от ЛВ към ЕВРО
        </p>
      </div>

      <div className="flex justify-center mb-6">
        <ExchangeRateDisplay rate={EXCHANGE_RATE} />
      </div>

      <div className="bg-card rounded-2xl p-6 shadow-card border border-border space-y-6">
        <div className="space-y-4">
          <CurrencyInput
            label="Цена в ЕВРО"
            value={priceEUR}
            onChange={setPriceEUR}
            currency="EUR"
            placeholder="Въведете цена"
          />
          <CurrencyInput
            label="Получени ЛВ"
            value={givenBGN}
            onChange={setGivenBGN}
            currency="BGN"
            placeholder="Въведете получени ЛВ"
          />
        </div>

        <ResultDisplay
          priceInBGN={priceInBGN}
          changeInBGN={changeInBGN}
          changeInEuro={changeInEuro}
          isValid={isValid}
        />

        <Button
          variant="outline"
          onClick={handleReset}
          className="w-full h-12 text-muted-foreground hover:text-foreground transition-colors"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Нулиране на Калкулатора
        </Button>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-6 animate-fade-in">
        Използван фиксиран курс: 1 EUR = 1.9558 BGN
      </p>
    </div>
  );
};
