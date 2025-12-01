import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { setTheme, theme } = useTheme();

  return (
    <section className='flex justify-between items-center'>
      <div className='text-[16px]'>Fahmi Sinergia</div>
      <Switch
        onCheckedChange={(e) => setTheme(e ? "dark" : "light")}
        icon={theme === "light" ? <Moon size={10} /> : <Sun size={10} />}
      ></Switch>
    </section>
  );
}
