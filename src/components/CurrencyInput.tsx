import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface CurrencyInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  currency: "EUR" | "BGN";
  placeholder?: string;
}

const currencySymbols = {
  EUR: "€",
  BGN: "лв",
};

const currencyColors = {
  EUR: "bg-gradient-primary",
  BGN: "bg-gradient-accent",
};

export const CurrencyInput = ({
  label,
  value,
  onChange,
  currency,
  placeholder = "0.00",
}: CurrencyInputProps) => {
  const handleChange = (e: any) => {
    const val = e.target.value;
    if (/^\d*\.?\d{0,2}$/.test(val) || val === "") {
      onChange(val);
    }
  };

  return (
    <div className="space-y-2 animate-fade-in">
      <Label className="text-sm font-medium text-muted-foreground">
        {label}
      </Label>
      <div className="relative">
        <div
          className={`absolute left-0 top-0 bottom-0 w-14 flex items-center justify-center rounded-l-lg ${currencyColors[currency]} text-primary-foreground font-semibold text-sm`}
        >
          {currencySymbols[currency]}
        </div>
        <Input
          type="text"
          inputMode="decimal"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="pl-16 h-14 text-lg font-medium bg-card border-border focus:ring-2 focus:ring-primary/20 transition-all duration-200"
        />
      </div>
    </div>
  );
};
