import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils"; // Importe o utilitário cn se estiver usando

type InfoCardProps = {
  title: string;
  value: string;
  icon: string;
  variant?: "primary" | "secondary" | "accent" | "default";
  trend?: "up" | "down" | "neutral";
  className?: string; // Adicione esta linha
};

export default function InfoCard({
  title,
  value,
  icon,
  variant = "default",
  className,
}: InfoCardProps) {
  const variantClasses = {
    primary: "bg-primary/10 border-primary/30",
    secondary: "bg-secondary/10 border-secondary/30",
    accent: "bg-accent/10 border-accent/30",
    default: "bg-card border-border",
  };

  return (
    <Card
      className={cn(
        `${variantClasses[variant]} transition-all hover:shadow-md`,
        className, // Adicione classes personalizadas aqui
      )}
    >
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <span className="text-xl font-semibold">{value}</span>
        </div>
      </CardContent>
    </Card>
  );
}
