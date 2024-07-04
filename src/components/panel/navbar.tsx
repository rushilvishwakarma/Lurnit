'use client';

import { useEffect, useState } from 'react';
import { ModeToggle } from "@/components/mode-toggle";
import { UserNav } from "@/components/panel/user-nav";
import { SheetMenu } from "@/components/panel/sheet-menu";

interface NavbarProps {
  title: string;
}

export function Navbar({ title }: NavbarProps) {
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBorder(window.scrollY > 10); // Adjust threshold if needed
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger on initial render
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-10 w-full backdrop-blur-xl dark:backdrop-blur-xl border-b transition-all duration-300 ease-in-out 
        ${showBorder ? 'border-border dark:border-border-dark' : 'border-transparent'}
        bg-transparent dark:bg-transparent`}  // Adjust this line
    >
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <h1 className="font-bold">{title}</h1>
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
