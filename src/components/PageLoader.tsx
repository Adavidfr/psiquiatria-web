import { useState, useEffect } from "react";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-100 bg-offwhite flex items-center justify-center transition-opacity duration-500">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="font-serif text-2xl text-primary">Cargando...</p>
      </div>
    </div>
  );
}
