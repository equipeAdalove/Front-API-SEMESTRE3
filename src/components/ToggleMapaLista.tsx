import { Map, List } from "lucide-react";
import { Switch } from "@/components/ui/switch";

interface ToggleProps {
  modoMapa: boolean;
  setModoMapa: (val: boolean) => void;
}

export default function ToggleMapaLista({
  modoMapa,
  setModoMapa,
}: ToggleProps) {
  return (
    <div className="flex items-center gap-2">
      <Map
        className={`w-5 h-5 ${!modoMapa ? "text-primary" : "text-muted-foreground"}`}
      />
      <Switch
        checked={modoMapa}
        onCheckedChange={setModoMapa}
        className="data-[state=checked]:bg-primary"
      />
      <List
        className={`w-5 h-5 ${modoMapa ? "text-primary" : "text-muted-foreground"}`}
      />
    </div>
  );
}
