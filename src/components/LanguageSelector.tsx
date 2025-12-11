import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Select language</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        avoidCollisions={false}   // ← Permite scroll da página
        className="z-[99999]"
      >
        <DropdownMenuItem
          onClick={() => setLanguage("pt")}
          className={`cursor-pointer ${
            language === "pt" ? "bg-primary/10" : ""
          }`}
        >
          <span className="text-2xl mr-2">🇧🇷</span>
          <span>Português</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`cursor-pointer ${
            language === "en" ? "bg-primary/10" : ""
          }`}
        >
          <span className="text-2xl mr-2">🇺🇸</span>
          <span>English</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
