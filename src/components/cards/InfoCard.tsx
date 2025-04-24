interface InfoCardProps {
  title: string;
  value: string;
  icon: string;
}

export default function InfoCard({ title, value, icon }: InfoCardProps) {
  return (
    <div className="bg-[var(--color-card)] text-[var(--color-foreground)] rounded-2xl p-6 shadow-md flex items-center justify-between">
      <div>
        <h4 className="text-base font-medium text-[var(--muted-foreground)] mb-1">
          {title}
        </h4>
        <p className="text-xl font-semibold leading-tight whitespace-pre-line">
          {value}
        </p>
      </div>
      <div className="text-3xl">{icon}</div>
    </div>
  );
}
