import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function Navbar() {
  return (
    <section className='flex justify-between items-center'>
      <div className='text-[16px]'>Fahmi Sinergia</div>

      <AnimatedThemeToggler />
    </section>
  );
}
