// src/components/Paginacao.tsx
"use client";

import { Button } from "@/components/ui/button";

export function Paginacao({
  page,
  totalPages,
  onPageChange,
}: {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}) {
  return (
    <div className="flex items-center justify-end space-x-2 py-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(Math.max(1, page - 1))} // ✅ Melhor controle
        disabled={page <= 1}
      >
        Anterior
      </Button>

      <span className="text-sm text-muted-foreground">
        Página {Math.max(1, page)} de {Math.max(1, totalPages)}{" "}
        {/* ✅ Prevenir números negativos */}
      </span>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(Math.min(totalPages, page + 1))} // ✅ Limite superior
        disabled={page >= totalPages}
      >
        Próximo
      </Button>
    </div>
  );
}
