import Link from "next/link";

export const Footer = () => {
  const footerNavigation = [
    {
      title: "More",
      description: "Let's keep Learning.",
      href: "#",
      items: [
        { title: "T&C", href: "/terms-and-conditions" },
        { title: "About Us", href: "/about-us" },
        { title: "Report an Issue", href: "/report-issues" },
        { title: "Attributions", href: "/attributions" },
      ],
    },
  ];

  return (
    <footer className="w-full py-10 lg:py-20 bg-zinc-200 dark:bg-muted/10 text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="px-7 flex flex-col gap-6 items-start">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Lurnit™
              </h2>
              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-foreground/75 text-left">
                Let's keep Learning.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:gap-20">
              <div className="flex flex-col text-sm leading-relaxed tracking-tight text-foreground/75 text-left">
                <p>Maharashtra</p>
                <p>Mumbai, India</p>
              </div>
            </div>
          </div>
          <div className="px-7 lg:pr-20 flex flex-col-2 gap-10 lg:ml-auto lg:max-w-xs">
            {footerNavigation.map((item) => (
              <div key={item.title} className="flex flex-col gap-5">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                {item.items && (
                  <ul className="flex flex-col gap-1">
                    {item.items.map((subItem) => (
                      <li key={subItem.title}>
                        <Link
                          href={subItem.href}
                          className="text-foreground/75 hover:text-foreground transition-colors"
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
