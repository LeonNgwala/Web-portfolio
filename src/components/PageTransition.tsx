
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  
  // We use the pathname as a key to trigger re-render and animation when route changes
  return (
    <div key={location.pathname} className="animate-fade-in">
      {children}
    </div>
  );
}
