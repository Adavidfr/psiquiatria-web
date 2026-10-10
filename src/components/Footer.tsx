import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#10253F] text-[#F5F2EC] py-3 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] text-[#F5F2EC]/75 text-center">
          <span>
            © {new Date().getFullYear()} NODO | Network-Based Psychiatry by Alejandra Castillo M.D.
          </span>
          <Heart className="w-3 h-3 text-[#C8A46A] fill-[#C8A46A] flex-shrink-0" />
          <span className="hidden sm:inline opacity-40">•</span>
          <span className="text-[#F5F2EC]/60">Quito, Ecuador</span>
        </div>
      </div>
    </footer>
  );
}
