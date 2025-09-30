"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export const FavoriteButton = ({
  favorite,
  onToggleFavoriteClick,
}: {
  favorite: boolean;
  onToggleFavoriteClick: (e: React.MouseEvent) => void;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button
      size="icon"
      variant="secondary"
      className={cn(
        "absolute right-2 cursor-pointer top-2 h-8 w-8 shadow-md transition-colors",
        mounted &&
          favorite &&
          "bg-destructive text-destructive-foreground hover:bg-destructive/90"
      )}
      onClick={onToggleFavoriteClick}
    >
      <Heart
        className={cn("size-4", mounted && favorite && "text-white")}
        fill="white"
        stroke="currentColor"
      />
    </Button>
  );
};
