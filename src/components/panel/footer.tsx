import Link from "next/link";

export function Footer() {
  return (
    <div className="z-20 w-full bg-muted/50 backdrop-blur dark:bg-muted/30">
      <div className="mx-4 md:mx-8 flex h-14 items-center">
        <p className="text-xs md:text-sm leading-loose text-muted-foreground text-left">
          Hello world :P
        </p>
      </div>
    </div>
  );
}
