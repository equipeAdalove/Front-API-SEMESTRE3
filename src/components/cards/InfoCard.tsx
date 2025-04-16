interface InfoCardProps {
  title: string;
  value: string;
  icon: string;
}

export default function InfoCard({ title, value, icon }: InfoCardProps) {
  return (
    <div className="bg-[var(--color-card)] text-[var(--color-foreground)] rounded-2xl p-6 shadow-md flex items-center justify-between">
      <div>
        <h4 className="text-sm text-[var(--muted-foreground)]">{title}</h4>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <div className="text-3xl">{icon}</div>
    </div>
  );
}
