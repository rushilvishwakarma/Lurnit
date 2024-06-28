import Link from "next/link";
import { PanelsTopLeft } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { ContentLayout } from "@/components/panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const cards = [
  {
    title: "Physics",
    description: "Card Description 1",
    image: "https://github.com/shadcn.png",
    learnMoreLink: "/learn-more-physics",
  },
  {
    title: "Chemistry",
    description: "Card Description 2",
    image: "https://github.com/shadcn.png",
    learnMoreLink: "/learn-more-chemistry",
  },
  {
    title: "Mathematics",
    description: "Card Description 3",
    image: "https://github.com/shadcn.png",
    learnMoreLink: "/learn-more-mathematics",
  },
  {
    title: "English",
    description: "Card Description 4",
    image: "https://github.com/shadcn.png",
    learnMoreLink: "/learn-more-english",
  },
  {
    title: "Biology",
    description: "Card Description 5",
    image: "https://github.com/shadcn.png",
    learnMoreLink: "/learn-more-biology",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        {/* Add your header content here */}
      </header>

      {/* Main Content */}
      <div className="container mx-auto py-20 lg:py-40">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              Something new!
            </h2>
            <p className="text-lg max-w-xl leading-relaxed tracking-tight text-muted-foreground text-left">
              Managing a small business today is already tough.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <Card
                key={index}
                className="flex flex-col space-y-2 p-4 shadow-md rounded-lg px-4 py-6"
              >
                <CardHeader className="flex flex-col space-y-2">
                  <Avatar>
                    <AvatarImage src={card.image} alt={card.title} />
                    <AvatarFallback>
                      {card.title.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <CardTitle className="text-lg font-bold leading-none mb-1">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {card.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <ButtonOutline link={card.learnMoreLink} />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="container flex justify-center mb-10">
        <div className="lg:flex lg:justify-end lg:items-center lg:ml-10">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-sm md:w-full lg:w-sm xl:w-sm"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 md:py-0 border-t border-border/40">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
            Let's Learn how to use{" "}
            <Link
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              components
            </Link>
            . Creating a Learning Platform.
          </p>
        </div>
      </footer>
    </div>
  );
}

export function ButtonOutline({ link }: { link: string }) {
  return (
    <Link href={link}>
      <Button variant="outline" className="full-width-btn">
        Visit
      </Button>
    </Link>
  );
}

export function AccountPage() {
  return (
    <ContentLayout title="Account">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Account</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </ContentLayout>
  );
}