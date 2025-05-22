interface InfoCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

export default function InfoCard({ title, value, icon }: InfoCardProps) {
  // Formata o valor se for número, caso contrário mostra como texto normal
  const displayValue =
    typeof value === "number"
      ? value.toLocaleString("pt-BR", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
        })
      : value;

  return (
    <div className="bg-[var(--color-card)] text-[var(--color-foreground)] rounded-2xl p-6 shadow-md flex items-center justify-between">
      <div>
        <h4 className="text-base font-medium text-[var(--muted-foreground)] mb-1">
          {title}
        </h4>
        <p className="text-xl font-semibold leading-tight whitespace-pre-line">
          {displayValue}
        </p>
      </div>
      <div className="text-3xl">{icon}</div>
    </div>
  );
}
